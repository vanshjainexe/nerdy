# Nerdy 

A minimalist, high-speed reading comprehension platform built with TanStack Start, React, Tailwind CSS, and Supabase.

## Features

This is a sleek reading stimulator, you just read content on random topics for however long you want. And then you click ok. You answer some questions regarding the passage to test your understanding of the passage. Accordingly, you will get your wpm. And you will also get ranked on the leaderboard.

If you do like this, pls do contribute :)

## Development

```sh
# Install dependencies
npm install

# Start the dev server
npm run dev
```

## Environment Variables

To run this project locally, you will need to add the following environment variables to your `.env` file:

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
GROQ_API_KEY=your-groq-api-key
```

## Tech Stack

- **Framework**: TanStack Start (React)
- **Styling**: Tailwind CSS v4
- **Database / Auth**: Supabase
- **AI**: Groq (Llama-3)
