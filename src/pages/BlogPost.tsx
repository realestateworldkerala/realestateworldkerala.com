import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Link to="/" className="text-primary underline">Go back home</Link>
        </div>
      </div>
    );
  }

  const canonicalUrl = `https://realestateworldkerala.com/blog/${post.slug}`;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{`${post.title} | Real Estate World Kerala`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            datePublished: post.date,
            author: { '@type': 'Organization', name: post.author },
            image: [post.image],
            publisher: {
              '@type': 'Organization',
              name: 'Real Estate World Kerala',
            },
            mainEntityOfPage: canonicalUrl,
          })}
        </script>
      </Helmet>

      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <a href="/#blog" className="hover:text-primary">Blog</a>
          </nav>

          <article className="prose prose-invert max-w-none">
            <header className="mb-6">
              <span className="inline-block text-xs uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 rounded px-2 py-1">{post.category}</span>
              <h1 className="text-3xl md:text-5xl font-luxury font-bold mt-3 mb-2">{post.title}</h1>
              <p className="text-muted-foreground">{post.date} • {post.readTime} • {post.author}</p>
            </header>

            <img src={post.image} alt={`${post.title} - Kerala insights`} className="w-full rounded-xl shadow-xl mb-8" loading="lazy" />

            <div className="space-y-4 text-lg leading-relaxed">
              {post.content.split('\n').map((para, idx) => (
                <p key={idx}>{para.trim()}</p>
              ))}
            </div>
          </article>

          <div className="mt-12">
            <a href="/#blog" className="text-primary underline">← Back to all articles</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
