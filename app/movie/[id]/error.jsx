"use client"
import Link from 'next/link'
import React from 'react'

const Error = () => {
    return (
        <div style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        }}>
            <h1>An error has occured. Sorry for that!</h1>
            <Link
                href="/"
                style={{
                    textDecoration: "underline",
                    fontSize: 20,
                    marginTop: 8
                }}>
                Go Home Page
            </Link>
        </div>
    )
}

export default Error