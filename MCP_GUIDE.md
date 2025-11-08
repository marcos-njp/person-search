# 🌟 MCP Integration Guide - Person Search App

This guide covers everything you need to know about the MCP (Model Context Protocol) integration in the Person Search application.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/pnpm
- Vercel account (for deployment)
- Claude Desktop installed

### 1. Install mcp-remote
```bash
npm install -g mcp-remote
```

### 2. Configure Claude Desktop

**Windows:** Edit `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
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
}
```

### 3. Restart Claude Desktop
- Completely quit and reopen Claude Desktop
- Look for the 🔨 hammer icon in the bottom right

### 4. Test Commands
Try these in Claude Desktop:
```
List all people in the database
```

```
Create a new person named John Doe with email john@example.com and phone 0412345678
```

---

## 📚 Detailed Documentation

### MCP Endpoint
```
https://your-app.vercel.app/api/mcp
```

### Available Tools

| Tool | Description | Example |
|------|-------------|---------|
| `list_people` | List/search people | "List all people" |
| `get_person` | Get person by ID | "Show person with ID 123" |
| `create_person` | Add new person | "Create person named Alice" |
| `update_person` | Update person | "Update John's email to new@example.com" |
| `delete_person` | Remove person | "Delete person with ID 123" |

### Local Development

1. Start the development server:
   ```bash
   pnpm run dev
   ```

2. For local testing with Claude Desktop, use:
   ```json
   "args": [
     "-y",
     "mcp-remote",
     "http://localhost:3000/api/mcp"
   ]
   ```

### Deployment

1. Push changes to your repository:
   ```bash
   git add .
   git commit -m "Update MCP implementation"
   git push
   ```

2. Vercel will automatically deploy your changes

---

## 🛠️ Troubleshooting

### Common Issues

#### "Server disconnected" in Claude Desktop
- Verify the MCP server URL is correct
- Make sure your app is deployed and running
- Check Vercel logs for errors

#### "Command not found: npx"
Install Node.js from [nodejs.org](https://nodejs.org/)

#### MCP tools not working
1. Test the endpoint directly: `/mcp-demo`
2. Check Vercel deployment logs
3. Verify CORS settings

---

## 📁 Project Structure

```
app/
├── api/
│   └── mcp/
│       └── [transport]/route.ts  # MCP handler
├── mcp-demo/                     # Testing interface
└── mcp-setup/                   # Setup instructions
```

## 📝 Notes
- The MCP server runs directly on Vercel
- No separate server process needed
- All operations are authenticated via your app's existing auth

## 🔗 Useful Links
- [MCP Documentation](https://modelcontextprotocol.io)
- [Vercel Deployment](https://vercel.com/docs)
- [Claude Desktop Setup](https://modelcontextprotocol.io/quickstart/user)
