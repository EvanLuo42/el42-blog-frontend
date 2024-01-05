import matter from 'gray-matter'
import markdownit from 'markdown-it'

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

type Post = {
  title: string,
  date: string,
  content: string
}

const month = ["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"]

function handleRawPosts(rawPosts: string[]): Post[] {
  return rawPosts.map((rawPost) => {
    const meta = matter(rawPost)
    const date = new Date(meta.data.date)
    const md = markdownit()
    
    return { 
      title: meta.data.title,
      date: `${month[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`,
      content: meta.content,
    }
  })
}