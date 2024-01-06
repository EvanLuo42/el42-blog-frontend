import matter from 'gray-matter'
import markdownit from 'markdown-it'
import { TreeNode } from '@/markdown/utils'

export async function getRawPosts(): Promise<string[]> {
  const files = import.meta.glob('@/posts/*.md', { as: 'raw' })
  const rawPosts: Array<string> = []
  for (const path in files) {
    const content = await files[path]()
    rawPosts.push(content)
  }
  return rawPosts.sort(sortPostsByDate)
}

function sortPostsByDate(postA: string, postB: string) {
  return new Date(matter(postB).data.date).getTime() - new Date(matter(postA).data.date).getTime()
}

type Post = {
  title: string,
  link: string,
  description: string,
  date: string,
  content: string,
  toc: TreeNode<string>[] | null,
}

const month = ["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"]

export function handleRawPosts(rawPosts: Array<string>): Array<Post> {
  return rawPosts.map((rawPost) => {
    const meta = matter(rawPost)
    const date = new Date(meta.data.date)
    const md = markdownit()
    const html = md.render(meta.content)
    const htmlParser = new DOMParser()
    const htmlObject = htmlParser.parseFromString(html, 'text/html')
    const headings = htmlObject.body.querySelectorAll('h1,h2,h3')
    return { 
      title: meta.data.title,
      date: `${month[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`,
      link: meta.data.link,
      description: meta.data.description,
      content: html,
      toc: headings.length != 0 ? generateToc(headings) : null
    }
  })
}

type Toc = string
function generateToc(headings: NodeListOf<Element>): TreeNode<Toc>[] {
  const nodes: TreeNode<Toc>[] = []
  let currentNode: TreeNode<Toc>

  headings.forEach((heading) => {
    const headingValue = heading.nodeValue ??= ''
    switch (heading.tagName) {
      case 'h1':
        nodes.push(currentNode)
        currentNode = new TreeNode(headingValue)
        break
      case 'h2':
        currentNode.children.push(new TreeNode(headingValue))
        break
      case 'h3':
        currentNode
          .children[currentNode.children.length - 1]
          .children
          .push(new TreeNode(headingValue))
        break
    }
  })
  nodes.push(currentNode!)
  return nodes
}