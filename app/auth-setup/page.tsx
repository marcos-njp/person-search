import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info, Key, Settings, Shield } from "lucide-react"

export default function AuthSetupPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">OAuth Authentication Setup</h1>
        <p className="text-lg text-muted-foreground">
          Complete guide to the Google OAuth implementation in this application
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Authentication Architecture
            </CardTitle>
            <CardDescription>How OAuth is implemented in this app</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Technology Stack</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Auth.js (NextAuth v5)</strong> - Modern authentication library for Next.js</li>
                <li><strong>Google OAuth 2.0</strong> - Secure authentication provider</li>
                <li><strong>Prisma Adapter</strong> - Database session management</li>
                <li><strong>PostgreSQL (Neon)</strong> - User and session storage</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Authentication Flow</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>User clicks &quot;Sign in with Google&quot;</li>
                <li>Redirected to Google OAuth consent screen</li>
                <li>User authorizes the application</li>
                <li>Google returns authorization code</li>
                <li>Auth.js exchanges code for access token</li>
                <li>User profile is fetched and stored in database</li>
                <li>Session is created and user is authenticated</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              Configuration Details
            </CardTitle>
            <CardDescription>Environment variables and setup requirements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Required Environment Variables</h3>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div><span className="text-blue-500">AUTH_SECRET</span>=your-secret-key</div>
                <div><span className="text-blue-500">GOOGLE_CLIENT_ID</span>=your-client-id</div>
                <div><span className="text-blue-500">GOOGLE_CLIENT_SECRET</span>=your-client-secret</div>
                <div><span className="text-blue-500">DATABASE_URL</span>=your-database-connection</div>
              </div>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                All credentials are securely stored in environment variables and never committed to version control.
              </AlertDescription>
            </Alert>

            <div>
              <h3 className="font-semibold mb-2">Google Cloud Console Setup</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Create project in Google Cloud Console</li>
                <li>Enable Google OAuth API</li>
                <li>Configure OAuth consent screen</li>
                <li>Create OAuth 2.0 credentials (Web application)</li>
                <li>Add authorized redirect URIs:
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li><code className="text-xs">http://localhost:3000/api/auth/callback/google</code></li>
                    <li><code className="text-xs">https://your-domain.com/api/auth/callback/google</code></li>
                  </ul>
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Database Schema
            </CardTitle>
            <CardDescription>Auth.js tables managed by Prisma</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div>
                <h4 className="font-semibold">User Table</h4>
                <p className="text-muted-foreground">Stores user profile information (id, name, email, image)</p>
              </div>
              <div>
                <h4 className="font-semibold">Account Table</h4>
                <p className="text-muted-foreground">OAuth provider details and tokens (Google OAuth data)</p>
              </div>
              <div>
                <h4 className="font-semibold">Session Table</h4>
                <p className="text-muted-foreground">Active user sessions with expiration timestamps</p>
              </div>
              <div>
                <h4 className="font-semibold">VerificationToken Table</h4>
                <p className="text-muted-foreground">Email verification tokens (if email auth is added)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Implementation Files</CardTitle>
            <CardDescription>Key files in the authentication system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm font-mono">
              <div><code className="text-blue-500">auth.ts</code> - Auth.js configuration and exports</div>
              <div><code className="text-blue-500">middleware.ts</code> - Route protection and redirects</div>
              <div><code className="text-blue-500">app/api/auth/[...nextauth]/route.ts</code> - API handler</div>
              <div><code className="text-blue-500">app/auth/signin/page.tsx</code> - Sign-in page</div>
              <div><code className="text-blue-500">app/components/user-menu.tsx</code> - User dropdown menu</div>
              <div><code className="text-blue-500">prisma/schema.prisma</code> - Database models</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
