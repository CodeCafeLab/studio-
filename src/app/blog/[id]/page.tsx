import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, ArrowRight, Share2, BookOpen } from 'lucide-react';
import { blogPosts } from '@/lib/data';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postId = parseInt(id);
  
  const post = blogPosts.find(p => p.id === postId);
  
  if (!post) {
    notFound();
  }

  // Get related posts (excluding current)
  const relatedPosts = blogPosts.filter(p => p.id !== postId).slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-end bg-gradient-to-br from-ojash-blue via-ojash-blue/90 to-[#004577] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ojash-blue via-ojash-blue/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-16 md:py-20">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-ojash-orange text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                <Calendar className="inline h-4 w-4 mr-1" />
                {post.date}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl">
              {post.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl mb-12 -mt-20 relative z-20">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              {post.fullSummary.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
            </article>

            {/* Image Gallery */}
            {post.summaryImages && post.summaryImages.length > 1 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Photo Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {post.summaryImages.slice(1).map((img, index) => (
                    <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <Image
                        src={img}
                        alt={`${post.title} - Image ${index + 2}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <Share2 className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600 font-medium">Share this story</span>
                </div>
                <div className="flex items-center gap-3">
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://ojashwelfare.in/blog/${post.id}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gray-100 rounded-full hover:bg-ojash-blue hover:text-white transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://ojashwelfare.in/blog/${post.id}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gray-100 rounded-full hover:bg-ojash-blue hover:text-white transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                  <a 
                    href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - https://ojashwelfare.in/blog/${post.id}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gray-100 rounded-full hover:bg-ojash-blue hover:text-white transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-gradient-ojash-soft">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-ojash-orange/10 border border-ojash-orange/20 px-4 py-2 rounded-full mb-4">
                <BookOpen className="h-4 w-4 text-ojash-orange" />
                <span className="text-sm font-semibold text-ojash-orange">Keep Reading</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Related Stories</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group gradient-border-ojash bg-white rounded-2xl overflow-hidden card-hover-lift"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-ojash-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {relatedPost.date}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-ojash-blue transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 mb-4">{relatedPost.summary}</p>
                    <span className="inline-flex items-center gap-2 text-ojash-blue font-semibold text-sm group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-ojash-blue to-[#004577] text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of Our Story</h2>
            <p className="text-white/80 text-lg mb-8">
              Your support helps us write more success stories. Join our mission to empower 
              underprivileged children through education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full btn-donate-hover text-white"
              >
                Donate Now
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

