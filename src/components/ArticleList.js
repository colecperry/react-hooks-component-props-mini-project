import Article from "./Article.js"

const ArticleList = ({posts}) => {
  const Articles = posts.map((post) => (
    <Article 
    key = {post.id}
    title ={post.title}
    date = {post.date}
    preview = {post.preview}
    minutes = {post.minutes}

    />
  ))
    return (
        <main>
        {Articles}
        </main>
    )
}

export default ArticleList