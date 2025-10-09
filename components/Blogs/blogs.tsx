"use client"

import { BlogItem } from "@/components/ui/blog-item"
import { blogs } from "@/lib/data"

export function Blogs() {
  return (
    <section aria-labelledby="blogs-title" className="max-w-6xl mx-auto py-8 sm:py-12 md:py-16 px-2 sm:px-0" id="blogs">
      <h2 id="blogs-title" className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">
        Blog Posts
      </h2>
      <p className="text-[var(--text-secondary)] mb-4 sm:mb-6 text-sm sm:text-base">
        I write about software development, sharing insights and experiences from my journey in tech.
      </p>
      <div className="grid gap-3 sm:gap-4">
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
