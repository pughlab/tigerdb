$(document).ready(function() {
    if (typeof tigerDbContent === 'undefined') {
        console.error('tigerDbContent is not defined. Make sure content.js is loaded.');
        return;
    }

    // Fix: Select only the direct container of docs-content to avoid selecting the footer's container
    const contentContainer = $('.docs-content > .container');
    const navContainer = $('#docs-nav .section-items');
    
    let navHtml = '';
    let contentHtml = '';

    // Helper to parse simple markdown-like syntax
    function parseText(text) {
        if (!text) return '';
        // Links: [text](url)
        let parsed = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
        // Bold: **text**
        parsed = parsed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        // Italic: *text*
        parsed = parsed.replace(/\*([^*]+)\*/g, '<em>$1</em>');
        return parsed;
    }

    // Helper to render content blocks
    function renderBlocks(blocks) {
        if (!blocks) return '';
        if (typeof blocks === 'string') return `<p>${parseText(blocks)}</p>`;
        if (!Array.isArray(blocks)) return '';

        return blocks.map(block => {
            if (typeof block === 'string') {
                return `<p>${parseText(block)}</p>`;
            }
            
            switch (block.type) {
                case 'paragraph':
                    return `<p>${parseText(block.text)}</p>`;
                case 'heading':
                    return `<h${block.level || 3}>${parseText(block.text)}</h${block.level || 3}>`;
                case 'image-caption':
                    return `<figcaption class="figure-caption mt-3"><i class="fas fa-info-circle mr-2"></i>${parseText(block.text)}</figcaption>`;
                case 'alert':
                    return `<div class="alert alert-${block.style || 'light'}" role="alert">${parseText(block.text)}</div>`;
                case 'button-list':
                    let listHtml = '<div class="col-md-6 col-12"><ul class="list list-unstyled pl-0">';
                    block.items.forEach(item => {
                        listHtml += `<li><a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-${item.style || 'primary'}">`;
                        if (item.icon) listHtml += `<i class="${item.icon} mr-2"></i>`;
                        listHtml += ` ${item.text}</a></li>`;
                    });
                    listHtml += '</ul></div>';
                    return listHtml;
                case 'list':
                    let ulHtml = '<ul>';
                    block.items.forEach(item => {
                        ulHtml += `<li>${parseText(item)}</li>`;
                    });
                    ulHtml += '</ul>';
                    return ulHtml;
                case 'figure':
                    return `<figure class="figure docs-figure py-3">
                                <a href="${block.src}" data-title="${block.title || block.caption || ''}" data-toggle="lightbox">
                                    <img class="figure-img img-fluid shadow rounded" src="${block.src}" alt="${block.alt || ''}" style="width: ${block.width || '800px'};">
                                </a>
                                ${block.caption ? `<figcaption class="figure-caption mt-3"><i class="fas fa-info-circle mr-2"></i>${parseText(block.caption)}</figcaption>` : ''}
                            </figure>`;
                case 'table':
                    let tableHtml = '';
                    if (block.title) tableHtml += `<h5>${parseText(block.title)}</h5>`;
                    tableHtml += `<div class="table-responsive my-4"><table class="table table-striped">`;
                    
                    if (block.headers) {
                        tableHtml += `<thead><tr>`;
                        block.headers.forEach(h => tableHtml += `<th scope="col">${parseText(h)}</th>`);
                        tableHtml += `</tr></thead>`;
                    }
                    
                    if (block.rows) {
                        tableHtml += `<tbody>`;
                        block.rows.forEach(row => {
                            tableHtml += `<tr>`;
                            row.forEach((cell, i) => {
                                if (block.firstColumnIsHeader && i === 0) {
                                    tableHtml += `<th scope="row">${parseText(cell)}</th>`;
                                } else {
                                    tableHtml += `<td>${parseText(cell)}</td>`;
                                }
                            });
                            tableHtml += `</tr>`;
                        });
                        tableHtml += `</tbody>`;
                    }
                    
                    tableHtml += `</table></div>`;
                    return tableHtml;
                case 'callout':
                    const styles = {
                        info: { icon: 'fas fa-info-circle', defaultTitle: 'Note' },
                        warning: { icon: 'fas fa-exclamation-triangle', defaultTitle: 'Warning' },
                        tip: { icon: 'fas fa-thumbs-up', defaultTitle: 'Tip', class: 'success' },
                        danger: { icon: 'fas fa-exclamation-circle', defaultTitle: 'Danger' }
                    };
                    
                    let styleKey = block.style || 'info';
                    let cssClass = styleKey;
                    if (styleKey === 'tip') cssClass = 'success';
                    
                    const config = styles[styleKey] || styles.info;
                    const title = block.title || config.defaultTitle;
                    
                    let calloutContent = '';
                    if (Array.isArray(block.content)) {
                        calloutContent = block.content.map(c => `<p>${parseText(c)}</p>`).join('');
                    } else {
                        calloutContent = `<p>${parseText(block.content)}</p>`;
                    }

                    return `<div class="callout-block callout-block-${cssClass}">
                                <div class="content">
                                    <h4 class="callout-title">
                                        <span class="callout-icon-holder mr-1">
                                            <i class="${config.icon}"></i>
                                        </span>
                                        ${title}
                                    </h4>
                                    ${calloutContent}
                                </div>
                            </div>`;
                default:
                    return '';
            }
        }).join('');
    }

    tigerDbContent.sections.forEach((section, index) => {
        // Build Nav
        const activeClass = index === 0 ? 'active' : '';
        navHtml += `<li class="nav-item section-title"><a class="nav-link scrollto ${activeClass}" href="#${section.id}"><span class="theme-icon-holder mr-2"><i class="${section.icon}"></i></span>${section.title}</a></li>`;
        
        section.subsections.forEach(sub => {
            navHtml += `<li class="nav-item"><a class="nav-link scrollto" href="#${sub.id}">${sub.title}</a></li>`;
        });

        // Build Content
        contentHtml += `<article class="docs-article" id="${section.id}">`;
        contentHtml += `<header class="docs-header">`;
        contentHtml += `<h1 class="docs-heading">${section.title}`;
        if (section.lastUpdated) {
            contentHtml += ` <span class="docs-time">Last updated: ${section.lastUpdated}</span>`;
        }
        contentHtml += `</h1>`;
        
        if (section.intro) {
            contentHtml += `<section class="docs-intro">${renderBlocks(section.intro)}</section>`;
        }
        contentHtml += `</header>`;

        section.subsections.forEach(sub => {
            contentHtml += `<section class="docs-section" id="${sub.id}">`;
            contentHtml += `<h2 class="section-heading">${sub.title}</h2>`;
            contentHtml += renderBlocks(sub.content);
            contentHtml += `</section>`;
        });

        contentHtml += `</article>`;
    });

    // Replace Nav
    navContainer.html(navHtml);

    // Replace Content (Remove existing articles and prepend new ones)
    $('.docs-article').remove();
    contentContainer.prepend(contentHtml);
    
    // Note: docs.js runs after this (if included after) and will handle:
    // - ScrollSpy initialization
    // - Smooth scrolling event binding
});
