import React from 'react';

function Home() {
  return (
    <div className="container mx-auto">
      <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-3xl font-semibold">Welcome to UEFA Web App</h1>
      </header>
      <main className="p-4">
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
          {/* Add news articles here */}
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Matches</h2>
          {/* Add match cards here */}
        </section>
      </main>
      <footer className="bg-blue-500 p-4 text-white text-center">
        <p>&copy; 2024 UEFA Web App</p>
      </footer>
    </div>
  );
}

export default Home;
