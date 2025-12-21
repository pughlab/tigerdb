const tigerDbContent = {
    sections: [
        {
            id: "section-1",
            title: "Introduction",
            icon: "fas fa-info",
            lastUpdated: "2025-12-19 17:31 EST",
            subsections: [
                {
                    id: "item-1-1",
                    title: "About us",
                    content: [
                        "TIGERdb (T-cell and ImmunoGlobulin Epitope Receptor Database) is a curated, web-based platform developed to support the storage, analysis, and access of antigen specific T-cell receptor (TCR) data. TIGERdb incorporates a manually curated compendium of experimentally validated TRB-CDR3B sequences from published studies"
                    ]
                },
                {
                    id: "item-1-2",
                    title: "Contact us",
                    content: [
                        "We'd like to hear from you! Please feel free to reach the TIGERdb team to report bugs, suggest features, provide feedback, etc. Email us at [tigerdb@uhn.ca](mailto:tigerdb@uhn.ca) or [submit an issue on Github.](https://github.com/pughlab/tigerdb/issues)"
                    ]
                },
                {
                    id: "item-1-3",
                    title: "Portal Overview",
                    content: [
                        {
                            type: "figure",
                            src: "assets/images/search-intro.png",
                            title: "Portal Overview", // Optional: for lightbox title
                            caption: "The two main pages within TIGERdb: 1) Data, 2) Analysis.", // Optional: displayed below image
                            alt: "The two main pages within TIGERdb: 1) Data, 2) Analysis.", // Optional
                            width: "800px" // Optional: defaults to 800px
                        },
                        "The TIGERdb interface is represented by two main pages: Data and Analysis. The Data page (1) serves as the homepage, and here you can upload and view your own data, or explore public projects curated by the TIGERdb team or other users. The data page also features a search bar, allowing users to search based on TCR CDR3β amino acid sequence or by project. Once a project is uploaded, the Analysis page (2) shows all the runs/jobs that have been submitted. Run statuses are displayed by the run card colour (e.g. green for completed, yellow for in progress, etc.). Once a run is selected, the run details and results are shown, which users can download."
                    ]
                },
            ]
        },
        {
            id: "section-2",
            title: "Search",
            icon: "fas fa-search",
            intro: [
                "The search bar appears at the top of the Data page. Here, users may search by CDR3β amino acid sequences, projects, and use tags to filter searches across the curated publications and user-uploaded datasets."
            ],
            subsections: [
                {
                    id: "item-2-1",
                    title: "TCR Search",
                    content: [
                        "Searches can be performed against the full set of curated public TCRs as well as user uploaded project data. Search for one or more CDR3β (CDR3b) sequences. Separate multiple sequences using vertical bars ( | )."
                    ]
                },
                {
                    id: "item-2-2",
                    title: "Projects Search",
                    content: [
                        "Here, you can search for curated publications (196 total studies) of validated TCRs. You may search by the project name or description."
                    ]
                },
                {
                    id: "item-2-3",
                    title: "Filtering by tags",
                    content: [
                        "Data (both TCRs and Projects) in TIGERdb can be easily filtered by tags. There are two hierarchies of tags: 1) Tag Categories and 2) Individual Tags.",
                        { type: "heading", level: 3, text: "Tag categories" },
                        "Examples include cancer, bacterial, viral, etc.",
                        { type: "heading", level: 3, text: "Individual tags" },
                        "Examples include cancer type, source, etc."
                    ]
                }
            ]
        },
        {
            id: "section-3",
            title: "Data",
            icon: "fas fa-database",
            intro: [],
            subsections: [
                {
                    id: "item-3-1",
                    title: "Creating a Project",
                    content: [
                        "You must be logged in to create a new project. To create a new project, click on the 'Upload new project' card in the list of projects. A 'New Project' window will appear where you can enter a name and description for the project. If the project you are uploading will be used as a reference project, select the 'This is a reference project' option as well. Finally, click on the 'Create Project' button."
                    ]
                },
                {
                    id: "item-3-2",
                    title: "Creating a Dataset",
                    content: [
                        "To add a dataset to a project you have created, first select it by clicking on its card in the Project view of the Data page. When the project details are shown, click on the “Add new dataset” button. A “New Dataset” window will open. Here, type the dataset's name and click on the 'Create Dataset' button. Once created, the dataset will be listed within the project and will be ready for data upload."
                    ]
                },
                {
                    id: "item-3-3",
                    title: "Uploading to a Dataset",
                    content: [
                        "To upload data to an existing dataset, click on the data set and then the “Upload TCR Data” button. A window will show up, where you can upload a dataset either by clicking on the 'Upload' button, or by dragging and dropping the dataset's file into the window. After the upload is successful, the Uploads section will be updated to show the name of the file you uploaded, as well as the options to select headers for annotation/curation, annotate and curate the dataset, and finally the Delete button."
                    ]
                },
                {
                    id: "item-3-4",
                    title: "Setting Dataset Headers for Analysis",
                    content: [
                        {
                            type: "table",
                            title: "Gene-by-Barcode Matrix:", // Optional header
                            headers: ["", "BARCODE1", "BARCODE2", "BARCODE3"],
                            firstColumnIsHeader: true, // Optional: makes the first cell in each row a <th>
                            rows: [
                                ["GENE1", "0", "1", "0"],
                                ["GENE2", "2", "1", "7"],
                                ["GENE3", "1", "4", "0"]
                            ]
                        },
                        {
                            type: "callout",
                            style: "info", // or "warning", "tip", "danger"
                            // title: "Note", // Optional: overrides default title
                            content: "One-line-command R script to convert gene-by-barcode text files..." 
                            // content can also be an array of strings for multiple paragraphs
                        },
                        "When you upload a file for the dataset, you must select the headers that will be used for processing. To do so, click on the 'Set Headers' button (symbolized by a blue table button). A new window will appear, showing you the first five rows of your file. Select the file delimiter in the dropdown menu. The options are tab, comma, semicolon, and pipe. Select the checkbox below if the file includes a header as the first row.",
                        "Next, map the appropriate columns for the following fields: CDR3b, TRBV, TRBJ, CDR3a, subject condition, and clone count. Once all required fields have been assigned, the header information can be submitted."
                    ]
                }
            ]
        },
        {
            id: "section-4",
            title: "Analysis",
            icon: "fab fa-react",
            intro: [
                "The Analysis page of TIGERdb provides tools for running and managing GLIPHII analyses using datasets available within the platform. This page displays all analysis runs created by the user, allows new runs to be configured and submitted, provides real-time status updates, and enables downloading of results or logs."
            ],
            subsections: [
                {
                    id: "item-4-1",
                    title: "Creating a Run",
                    content: [
                        "To create a new run, select the Add New Run card from the runs list. This opens the New Run window, where you must enter a name and description for the run. These fields are used to document the purpose of the analysis and distinguish it from other runs.",
                        "Next, users select the projects and datasets that will serve as input for the analysis. At least one query project and one reference project must be selected. Query projects provide the datasets to be analyzed, while reference projects supply curated datasets used for comparison.",
                        "To select a query project, locate the project containing the desired dataset and select the dataset name to view its uploaded files. One or more files may be selected as input sources. Multiple datasets and projects can be included as needed. Selecting the project itself will automatically include all datasets and uploaded files associated with that project.",
                        "Reference projects are selected in a similar manner; however, all uploaded datasets within a reference project are automatically included once the project is selected. After all required inputs have been chosen, the run can be created and will be saved to the database with an initial status of Pending."
                    ]
                },
                {
                    id: "item-4-2",
                    title: "Submitting a Run",
                    content: [
                        "To submit a run, click on it. The details for the run will appear. You can change some parameters for the run before submission by inputting the values you need in their corresponding fields. After you have finished, click on the 'Submit Run' button at the bottom of the page. The run's status will change to Submitted, and the run logs will be shown and updated in real time."
                    ]
                },
                {
                    id: "item-4-3",
                    title: "Run Status",
                    content: [
                        "The status of each analysis run is displayed on the Analysis page and is updated automatically as the run progresses. Each status is also visually indicated by color: Pending runs are shown in orange, Submitted runs in yellow, Completed runs in green, and Failed runs in red.",
                        { type: "heading", level: 3, text: "Public Runs" }
                    ]
                },
                {
                    id: "item-4-4",
                    title: "Interpreting GLIPHII and Network Visualization Results",
                    content: [
                        { type: "heading", level: 3, text: "GLIPHII Results" },
                        { type: "heading", level: 3, text: "Network Visualization Results" }
                    ]
                }
            ]
        },
        {
            id: "section-5",
            title: "Downloads",
            icon: "fas fa-cloud-download-alt",
            intro: [],
            subsections: [
                {
                    id: "item-5-1",
                    title: "Link to analysis results",
                    content: [
                        "The link to analysis is available after [creation of a run](#item-4-1) . Regardless of run status, your link to the results are persistent in the format of",
                        { type: "alert", text: "tigerdb.ca/home/analysis/RUN-ID", style: "light" },
                        "This RUN-ID is specific to your run and only viewable by the user account who created it. Results are available for [download](#item-5-3) following run completion."
                    ]
                },
                {
                    id: "item-5-2",
                    title: "Downloading raw TCRs",
                    content: []
                },
                {
                    id: "item-5-3",
                    title: "Downloading GLIPHII Analysis and Network Visualization Results",
                    content: []
                }
            ]
        },
        {
            id: "section-6",
            title: "For Curators",
            icon: "fas fa-user-shield",
            intro: [
                "Coming soon."
            ],
            subsections: []
        },
        {
            id: "section-7",
            title: "Privacy and Security Policy",
            icon: "fas fa-key",
            intro: [],
            subsections: []
        },
        {
            id: "section-8",
            title: "Funding",
            icon: "fas fa-dollar-sign",
            intro: [
                "Supported by a grant from The Leukemia & Lymphoma Society"
            ],
            subsections: []
        },
        {
            id: "section-9",
            title: "Resources",
            icon: "fas fa-book-open",
            intro: [
                "TIGERdb resources will be updated here.",
                {
                    type: "button-list",
                    items: [
                        { text: "Go to TIGERdb.ca!", url: "https://tigerdb.ca", icon: "fas fa-play-circle", style: "primary" },
                        { text: "View Web App Code", url: "https://github.com/pughlab/tigerdb", icon: "fab fa-github fa-fw", style: "info" },
                        { text: "View Pipeline Scripts", url: "https://github.com/pughlab/tigerdb/tree/apollo-refactor/tcr-db/scripts", icon: "fas fa-code", style: "info" },
                        { text: "Report Bugs", url: "https://github.com/pughlab/tigerdb/issues", icon: "fas fa-bug mr-2", style: "warning" }
                    ]
                }
            ],
            subsections: []
        }
    ]
};
