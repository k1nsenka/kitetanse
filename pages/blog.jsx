import matter from "gray-matter"

const Blog = (props) => {
    return (
        <p>ブログ一覧ページ</p>  
    )
}

export default Blog

export async function getStaticProps() {
    const blogs = ((context) => {
        const keys = context.keys()
        const values = keys.map(context)
        const data = keys.map((key, index) => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
            const value = values[index]
            const document = matter(value.default)
            return {
                frontmatter: document.data,
                slug: slug
            }
        })
        return data
    })(require.context('../data', true, /\.md$/))

    const sortingArticles = blogs.sort((a, b) => {
        return b.frontmatter.id - a.frontmatter.id
    })

    return {
        props: {
            blogs: JSON.parse(JSON.stringify(sortingArticles))
        }
    }
}