"use client"

import { BlogItem } from "@/components/ui/blog-item"
import { blogs } from "@/lib/data"

export function Blogs() {
  return (
    <section aria-labelledby="blogs-title" className="max-w-6xl mx-auto py-16" id="blogs">
      <h2 id="blogs-title" className="text-xl font-medium mb-4">
        Blog Posts
      </h2>
      <p className="text-[var(--text-secondary)] mb-6">
        I write about software development, sharing insights and experiences from my journey in tech.
      </p>
      <div className="grid gap-4">
        {blogs.map((blog, index) => (
          <BlogItem
            key={index}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            link={blog.link}
          />
        ))}
      </div>
    </section>
  )
}
