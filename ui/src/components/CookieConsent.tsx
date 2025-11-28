import React, { useState, useEffect } from 'react'
import { Button, Container, Message } from 'semantic-ui-react'

export default function CookieConsent() {
    const [consentGiven, setConsentGiven] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent")
        if (consent === 'true') {
            setConsentGiven(true)
        }
    }, [])

    function handleAccept() {
        localStorage.setItem("cookie-consent", "true")
        setConsentGiven(true)
    }

    if (consentGiven) {
        return null
    }

    return (
        <Container style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            display: 'flex',
            padding: '10px 0',
            justifyContent: 'center'
        }}>
            <Message>
                <Message.Header>Cookies policy</Message.Header>
                <Message.Content>
                    We use cookies for authentication purposes. By continuing, you accept usage of these cookies.
                    <Button onClick={handleAccept} style={{marginLeft: '10px'}} color="black">Accept</Button>
                    <Button onClick={() => console.log('closed')}>Decline</Button>
                </Message.Content>
            </Message>
        </Container>
    )
}