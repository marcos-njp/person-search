import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Code, Download, Settings, Terminal, CheckCircle2, AlertCircle } from 'lucide-react'

export default function McpSetupPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">MCP Server Setup Guide</h1>
      <p className="text-muted-foreground mb-8">
        Step-by-step instructions to enable Person CRUD operations through Claude Desktop
      </p>

      {/* What is MCP Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>What is MCP?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            <strong>MCP (Model Context Protocol)</strong> is a protocol created by Anthropic that allows AI assistants 
            like Claude to interact with external tools and data sources. Think of it as a bridge that lets Claude 
            directly control your Person database through natural language.
          </p>
          
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-semibold mb-2">Example Usage:</p>
            <p className="text-sm italic">
              &quot;Create a new person named Sarah Johnson with email sarah@example.com and phone 0412345678&quot;
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              → Claude uses the MCP server to call your API and create the person record
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">1. You Chat</h4>
              <p className="text-sm text-muted-foreground">Talk to Claude Desktop in natural language</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">2. MCP Server</h4>
              <p className="text-sm text-muted-foreground">Translates requests to API calls</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">3. Your Database</h4>
              <p className="text-sm text-muted-foreground">CRUD operations executed</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prerequisites */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            Prerequisites
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Claude Desktop</strong> - Download from <a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">claude.ai/download</a></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Node.js 20+</strong> - Required to run the MCP server</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Git</strong> - To clone the MCP server repository</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Installation Steps */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Step 1: Install mcp-remote
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The MCP server runs <strong>directly on Vercel</strong> with your deployed app. 
            You just need to install <code className="bg-muted px-2 py-1 rounded">mcp-remote</code> to connect Claude Desktop to it.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Install globally via npm:</h4>
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
              npm install -g mcp-remote
            </div>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>mcp-remote</strong> is a proxy tool that converts HTTP requests to stdio, 
              which Claude Desktop requires for MCP communication.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Configuration */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Step 2: Get Your Vercel URL
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Your MCP server endpoint is:</p>
          
          <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
            https://your-app.vercel.app/api/mcp
          </div>

          <div>
            <h4 className="font-semibold mb-2">Find your Vercel URL:</h4>
            <ol className="list-decimal list-inside space-y-2 ml-2 text-sm">
              <li>Go to <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com</a></li>
              <li>Open your project dashboard</li>
              <li>Copy the deployment URL (e.g., <code className="bg-muted px-1 rounded text-xs">https://person-search-abc123.vercel.app</code>)</li>
              <li>Add <code className="bg-muted px-1 rounded text-xs">/api/mcp</code> to the end</li>
            </ol>
          </div>

          <Alert>
            <AlertDescription>
              <strong>Example:</strong> If your app is at <code className="bg-muted px-2 py-1 rounded text-xs">https://person-search-abc123.vercel.app</code>, 
              your MCP endpoint is <code className="bg-muted px-2 py-1 rounded text-xs">https://person-search-abc123.vercel.app/api/mcp</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Claude Desktop Configuration */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Step 3: Configure Claude Desktop
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Add the MCP server to Claude Desktop&apos;s configuration file:</p>

          <div>
            <h4 className="font-semibold mb-2">Configuration File Location:</h4>
            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
              <li><strong>Windows:</strong> <code className="bg-muted px-2 py-1 rounded text-xs">%APPDATA%\Claude\claude_desktop_config.json</code></li>
              <li><strong>macOS:</strong> <code className="bg-muted px-2 py-1 rounded text-xs">~/Library/Application Support/Claude/claude_desktop_config.json</code></li>
              <li><strong>Linux:</strong> <code className="bg-muted px-2 py-1 rounded text-xs">~/.config/Claude/claude_desktop_config.json</code></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Add This Configuration:</h4>
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-xs overflow-x-auto">
              <pre>{`{
  "mcpServers": {
    "person-crud": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://your-app.vercel.app/api/mcp"
      ]
    }
  }
}`}</pre>
            </div>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Important:</strong> Replace <code className="bg-muted px-1 rounded text-xs">https://your-app.vercel.app/api/mcp</code> with 
              your actual Vercel deployment URL + <code className="bg-muted px-1 rounded text-xs">/api/mcp</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Testing */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Step 4: Test the Integration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="list-decimal list-inside space-y-3 ml-2">
            <li><strong>Restart Claude Desktop</strong> after saving the configuration</li>
            <li><strong>Open a new conversation</strong> in Claude Desktop</li>
            <li><strong>Try a command:</strong>
              <div className="bg-muted p-3 rounded-lg mt-2 text-sm italic">
                &quot;List all people in the database&quot;
              </div>
            </li>
            <li><strong>Verify:</strong> Claude should use the MCP server to fetch and display your Person records</li>
          </ol>

          <div className="mt-4">
            <Button asChild>
              <Link href="/mcp-demo">
                View Live Demo →
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Available Tools */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Available MCP Tools</CardTitle>
          <CardDescription>Commands Claude can execute through the MCP server</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold">create_person</h4>
              <p className="text-sm text-muted-foreground">Create a new person in the database</p>
              <p className="text-xs mt-1 italic">Example: &quot;Create a person named John Doe with email john@example.com&quot;</p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold">get_person</h4>
              <p className="text-sm text-muted-foreground">Retrieve a person&apos;s details by ID</p>
              <p className="text-xs mt-1 italic">Example: &quot;Get details for person with ID abc123&quot;</p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold">list_people</h4>
              <p className="text-sm text-muted-foreground">List all people or search by name</p>
              <p className="text-xs mt-1 italic">Example: &quot;Show me all people in the database&quot;</p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold">update_person</h4>
              <p className="text-sm text-muted-foreground">Update a person&apos;s information</p>
              <p className="text-xs mt-1 italic">Example: &quot;Update John&apos;s email to newemail@example.com&quot;</p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold">delete_person</h4>
              <p className="text-sm text-muted-foreground">Remove a person from the database</p>
              <p className="text-xs mt-1 italic">Example: &quot;Delete the person with ID abc123&quot;</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Troubleshooting</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-sm">MCP server not appearing in Claude Desktop?</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground ml-2 mt-1">
                <li>Verify the configuration file path is correct</li>
                <li>Check that the MCP server path uses the correct format for your OS</li>
                <li>Restart Claude Desktop completely</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm">API calls failing?</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground ml-2 mt-1">
                <li>Confirm your Vercel app URL is correct in the .env file</li>
                <li>Check that your API key matches in both .env and claude_desktop_config.json</li>
                <li>Verify your Vercel app is deployed and accessible</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm">Build errors?</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground ml-2 mt-1">
                <li>Ensure Node.js 20+ is installed</li>
                <li>Run <code className="bg-muted px-2 py-1 rounded text-xs">npm install</code> again</li>
                <li>Delete node_modules and package-lock.json, then reinstall</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button asChild variant="outline">
          <Link href="/github">
            View GitHub Repository
          </Link>
        </Button>
        <Button asChild>
          <Link href="/mcp-demo">
            Try Live Demo
          </Link>
        </Button>
      </div>
    </div>
  )
}
