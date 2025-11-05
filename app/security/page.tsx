import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Shield, Lock, Eye, EyeOff, Server, Database, CheckCircle } from "lucide-react"

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Security Features</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive security implementation and protected routes documentation
        </p>
      </div>

      <Alert className="mb-6">
        <Shield className="h-4 w-4" />
        <AlertTitle>Security-First Design</AlertTitle>
        <AlertDescription>
          This application implements industry-standard security practices including OAuth 2.0, 
          route protection, session management, and secure credential storage.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Protected Routes
            </CardTitle>
            <CardDescription>Authentication-required pages and access control</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-3">Protected Pages</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive">Protected</Badge>
                    <code className="text-sm">/</code>
                    <span className="text-sm">Home (Person Search & CRUD)</span>
                  </div>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Public Pages</h3>
              <div className="space-y-2">
                {["/auth/signin", "/about", "/auth-setup", "/security", "/github"].map((route) => (
                  <div key={route} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Public</Badge>
                      <code className="text-sm">{route}</code>
                    </div>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Access Control Logic</h3>
              <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                <p><strong>Unauthenticated users:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Redirected to <code>/auth/signin</code> when accessing protected routes</li>
                  <li>Can view documentation pages (about, auth-setup, security, github)</li>
                  <li>Cannot access Person CRUD functionality</li>
                </ul>
                <p className="mt-3"><strong>Authenticated users:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Full access to Person Search and CRUD operations</li>
                  <li>Session persists across page refreshes</li>
                  <li>Can sign out from any page via user menu</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              OAuth 2.0 Security
            </CardTitle>
            <CardDescription>Google OAuth implementation security measures</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <h4 className="font-semibold">✓ State Parameter Protection</h4>
              <p className="text-muted-foreground">Prevents CSRF attacks during OAuth flow</p>
            </div>
            <div>
              <h4 className="font-semibold">✓ Secure Token Storage</h4>
              <p className="text-muted-foreground">Access tokens encrypted in database, never exposed to client</p>
            </div>
            <div>
              <h4 className="font-semibold">✓ HTTPS Enforcement</h4>
              <p className="text-muted-foreground">Production deployment requires secure connections</p>
            </div>
            <div>
              <h4 className="font-semibold">✓ Session Expiration</h4>
              <p className="text-muted-foreground">Automatic logout after inactivity period</p>
            </div>
            <div>
              <h4 className="font-semibold">✓ Scope Limitation</h4>
              <p className="text-muted-foreground">Only requests necessary user permissions (profile, email)</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              Middleware Protection
            </CardTitle>
            <CardDescription>Server-side route authentication</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <p>
                <code className="bg-muted px-2 py-1 rounded">middleware.ts</code> intercepts all requests 
                before they reach page components.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Protection Logic:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Check if user has valid session token</li>
                  <li>If accessing protected route without auth → redirect to sign-in</li>
                  <li>If authenticated → allow request to proceed</li>
                  <li>Public routes bypass authentication check</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Data Security
            </CardTitle>
            <CardDescription>Database and credential protection</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <h4 className="font-semibold">✓ Environment Variables</h4>
              <p className="text-muted-foreground">
                All secrets stored in <code>.env</code> file, excluded from version control via <code>.gitignore</code>
              </p>
            </div>
            <div>
              <h4 className="font-semibold">✓ Credential Rotation</h4>
              <p className="text-muted-foreground">
                Database passwords rotated after any potential exposure
              </p>
            </div>
            <div>
              <h4 className="font-semibold">✓ Encrypted Connections</h4>
              <p className="text-muted-foreground">
                PostgreSQL connections use SSL/TLS (<code>sslmode=require</code>)
              </p>
            </div>
            <div>
              <h4 className="font-semibold">✓ Prisma ORM</h4>
              <p className="text-muted-foreground">
                Parameterized queries prevent SQL injection attacks
              </p>
            </div>
            <div>
              <h4 className="font-semibold">✓ Session Management</h4>
              <p className="text-muted-foreground">
                Database-backed sessions with automatic cleanup of expired sessions
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <EyeOff className="h-5 w-5" />
              Best Practices Implemented
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span>No sensitive data in client-side JavaScript</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Server-side session validation on every request</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Secure HTTP-only cookies for session tokens</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span>CSRF protection built into Auth.js</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Automatic security headers via Next.js</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Environment-specific configuration (dev/prod separation)</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
