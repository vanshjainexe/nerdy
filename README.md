# Nerdy 

A minimalist, high-speed reading comprehension platform built with TanStack Start, React, Tailwind CSS, and Supabase.

## Features

- **Infinite Content**: Generates reading passages dynamically using the Groq API.
- **Global Leaderboard**: Compete globally and check your personal bests against others.
- **Sleek Aesthetic**: Minimalist design focused heavily on typography and speed.
- **True Retention Metrics**: WPM is calculated dynamically based on your comprehension quiz accuracy. 

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
