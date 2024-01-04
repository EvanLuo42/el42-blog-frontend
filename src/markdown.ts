import matter from "gray-matter"

export function getRawPosts() {
  const files = import.meta.glob('./../public/posts/*.md', { as: 'raw' })
  const rawPosts: string[] = []
  for (const path in files) {
    files[path]().then((content) => {
      rawPosts.push(content)
    })
  }
  return rawPosts.sort(sortPostsByDate)
}

function sortPostsByDate(postA: string, postB: string) {
  return new Date(matter(postB).data.date).getTime() - new Date(matter(postA).data.date).getTime()
}