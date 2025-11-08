import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, GitBranch, Code, FileCode } from "lucide-react"
import Link from "next/link"

export default function GitHubPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Github className="h-10 w-10" />
          GitHub Repository
        </h1>
        <p className="text-lg text-muted-foreground">
          View the complete source code and OAuth implementation
        </p>
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm">
            <strong>Original Project:</strong> Forked from{' '}
            <a 
              href="https://github.com/gocallum" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline font-semibold"
            >
              Callum Bir&apos;s
            </a>
            {' '}Person Search application
          </p>
          <p className="text-sm mt-2">
            <strong>Enhanced For:</strong> ECA Tech Bootcamp (AusBiz Consulting) — Week 4 MCP Integration
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Repository Information
            </CardTitle>
            <CardDescription>OAuth-secured Person Search application</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <h3 className="font-semibold text-lg">person-search</h3>
                <p className="text-sm text-muted-foreground">Next.js 15 + Auth.js + Prisma + PostgreSQL</p>
              </div>
              <Button asChild>
                <Link 
                  href="https://github.com/marcos-njp/person-search" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  View Repository
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2 text-sm font-semibold mb-1">
                  <GitBranch className="h-4 w-4" />
                  Branch
                </div>
                <p className="text-sm text-muted-foreground">next15</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2 text-sm font-semibold mb-1">
                  <Code className="h-4 w-4" />
                  Framework
                </div>
                <p className="text-sm text-muted-foreground">Next.js 15.5.6</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCode className="h-5 w-5" />
              Key Implementation Files
            </CardTitle>
            <CardDescription>OAuth authentication source code</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <code className="text-sm">auth.ts</code>
                <span className="text-xs text-muted-foreground">Auth.js configuration</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <code className="text-sm">middleware.ts</code>
                <span className="text-xs text-muted-foreground">Route protection</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <code className="text-sm">app/api/auth/[...nextauth]/route.ts</code>
                <span className="text-xs text-muted-foreground">API handler</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <code className="text-sm">prisma/schema.prisma</code>
                <span className="text-xs text-muted-foreground">Database schema</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <code className="text-sm">app/components/user-menu.tsx</code>
                <span className="text-xs text-muted-foreground">User session UI</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tech Stack</CardTitle>
            <CardDescription>Technologies used in this project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 border rounded-lg">
                <strong>Frontend:</strong>
                <ul className="mt-1 space-y-1 text-muted-foreground">
                  <li>• Next.js 15 (App Router)</li>
                  <li>• React 19</li>
                  <li>• TypeScript 5</li>
                  <li>• Tailwind CSS</li>
                  <li>• shadcn/ui Components</li>
                </ul>
              </div>
              <div className="p-3 border rounded-lg">
                <strong>Backend:</strong>
                <ul className="mt-1 space-y-1 text-muted-foreground">
                  <li>• Auth.js (NextAuth v5)</li>
                  <li>• Prisma ORM</li>
                  <li>• PostgreSQL (Neon)</li>
                  <li>• Server Actions</li>
                  <li>• Zod Validation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Features Implemented</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Google OAuth 2.0 authentication with Auth.js</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Protected routes with middleware authentication</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Full CRUD operations for Person management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Database-backed session management with Prisma</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Responsive UI with dark mode support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Form validation with Zod schemas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Comprehensive security implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Built-in documentation pages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Model Context Protocol (MCP) server integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Local MCP server with Prisma direct database access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Reusable component architecture (PageHeader, SectionCard, etc.)</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Attribution</CardTitle>
            <CardDescription>Credits and acknowledgments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <strong className="text-sm">Original Author:</strong>
              <p className="text-sm text-muted-foreground mt-1">
                <a 
                  href="https://github.com/gocallum" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline"
                >
                  Callum Bir
                </a>
                {' '}— Created the foundational Person Search application with OAuth authentication
              </p>
            </div>
            <div>
              <strong className="text-sm">Enhanced Version:</strong>
              <p className="text-sm text-muted-foreground mt-1">
                ECA Tech Bootcamp Project (AusBiz Consulting) — Added MCP integration, local server, 
                component refactoring, and comprehensive documentation
              </p>
            </div>
            <div className="flex gap-3 mt-4">
              <Button asChild size="sm" variant="outline">
                <Link href="https://github.com/gocallum" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Original Repository
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href="https://github.com/marcos-njp/person-search" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Enhanced Repository
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Deployment</CardTitle>
            <CardDescription>Production hosting and configuration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Platform:</strong> Vercel (optimized for Next.js)
              </div>
              <div>
                <strong>Database:</strong> Neon PostgreSQL (serverless)
              </div>
              <div>
                <strong>Environment:</strong> Production environment variables configured
              </div>
              <div>
                <strong>SSL:</strong> Automatic HTTPS encryption
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
