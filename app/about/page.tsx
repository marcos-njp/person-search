import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Shield } from 'lucide-react'

function ProjectOverview() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Project Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Person Search is an OAuth-secured demonstration project showcasing the power of Next.js, React, Auth.js, 
          and modern web technologies. It provides a secure, user-authenticated interface for searching and 
          managing person information with full CRUD operations.
        </p>
        <p className="mb-4">
          This project utilizes Next.js 15 with the App Router, React 19, TypeScript, Auth.js (NextAuth v5), 
          Prisma ORM, and PostgreSQL to create a responsive, secure, and accessible user experience.
        </p>
        <p>
          Key features include Google OAuth authentication, protected routes, server-side session management, 
          asynchronous search functionality, database-backed CRUD operations, and a dark mode toggle for user comfort.
        </p>
      </CardContent>
    </Card>
  )
}

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button asChild>
        <Link href="https://www.linkedin.com/in/callumbir/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
        </Link>
      </Button>
      <Button asChild variant="outline">
        <Link href="https://github.com/gocallum" target="_blank" rel="noopener noreferrer">
          <Github className="mr-2 h-4 w-4" /> GitHub
        </Link>
      </Button>
      <Button asChild variant="secondary">
        <Link href="https://x.com/callumbir">
          <Twitter className="mr-2 h-4 w-4" /> Contact Me
        </Link>
      </Button>
    </div>
  )
}

function DeveloperInfo() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>About the Developer</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Hi, I&apos;m <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">Callum Bir</code>, the developer behind Person Search. I&apos;m passionate about creating 
          efficient, user-friendly web applications using the latest technologies.
        </p>
        <p className="mb-4">
          This project serves as a demonstration of my skills in Next.js, React, and modern frontend development.
          I&apos;m always looking to learn and improve, so feel free to reach out with any questions or feedback!
        </p>
        <SocialLinks />
      </CardContent>
    </Card>
  )
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About Person Search</h1>
      <ProjectOverview />
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Authentication Architecture
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This application implements a robust authentication system using <strong>Auth.js (NextAuth v5)</strong> with 
            Google OAuth 2.0 as the identity provider. The architecture ensures that all Person CRUD operations 
            are protected behind authentication, providing a secure user experience.
          </p>
          
          <h3 className="font-semibold mb-2">Authentication Flow:</h3>
          <ol className="list-decimal list-inside space-y-2 mb-4 ml-2">
            <li>User navigates to the application</li>
            <li>Middleware checks for valid session</li>
            <li>If unauthenticated, redirects to Google OAuth sign-in</li>
            <li>User authorizes the application via Google</li>
            <li>Session is created and stored in PostgreSQL database</li>
            <li>User gains access to Person Search and CRUD operations</li>
          </ol>

          <h3 className="font-semibold mb-2">Security Features:</h3>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Protected Routes:</strong> Middleware enforces authentication on sensitive pages</li>
            <li><strong>Session Management:</strong> Database-backed sessions with automatic expiration</li>
            <li><strong>Secure Credentials:</strong> Environment variables for all sensitive configuration</li>
            <li><strong>OAuth 2.0:</strong> Industry-standard authentication protocol</li>
            <li><strong>Prisma ORM:</strong> Type-safe database queries with SQL injection prevention</li>
          </ul>

          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm">
              <strong>Learn more:</strong> Visit the <Link href="/auth-setup" className="text-primary hover:underline">Auth Setup</Link> and{' '}
              <Link href="/security" className="text-primary hover:underline">Security</Link> pages for detailed documentation.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>MCP Integration</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This application exposes a Model Context Protocol (MCP) integration that allows external AI agents
            (for example, Claude Desktop) to perform Person CRUD operations against the same database used by the app.
          </p>

          <h3 className="font-semibold mb-2">How it works</h3>
          <ol className="list-decimal list-inside space-y-2 mb-4 ml-2">
            <li>Start a local MCP server (or use the deployed MCP endpoint).</li>
            <li>Configure Claude Desktop to attach to the MCP server (instructions under <code className="rounded bg-muted px-1">/mcp-setup</code>).</li>
            <li>Send natural-language commands to create, read, update, or delete Person records; the MCP server executes them via Prisma.</li>
          </ol>

          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm">
              To get started quickly, visit the <Link href="/mcp-setup" className="text-primary hover:underline">MCP Setup</Link> page and then
              the <Link href="/mcp-demo" className="text-primary hover:underline">MCP Demo</Link> page to see example interactions.
            </p>
          </div>
        </CardContent>
      </Card>

      <DeveloperInfo />
      <Button asChild variant="link" className="mt-4">
        <Link href="/">
          Back to Home
        </Link>
      </Button>
    </div>
  )
}

