# ArmanElegance

ArmanElegance is an AI-powered motivational blog built with **Next.js**.

## Features

* Generate motivational quotes on demand using OpenAI (or fallback quotes if no API key).
* Write posts in Markdown – automatically converted to HTML.
* Modern, responsive UI.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. (Optional) Add your OpenAI API key:
   ```bash
   export OPENAI_API_KEY="your_key_here"
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000 in your browser.

## Adding Blog Posts

Create Markdown files in the `posts/` directory with front-matter:

```markdown
---
title: "My Post Title"
date: "2025-07-03"
---

Content here.
```
