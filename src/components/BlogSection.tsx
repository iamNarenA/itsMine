import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const BlogSection = () => {
  const featuredPost = {
    id: 1,
    title: 'Building Scalable React Applications: Best Practices for 2024',
    excerpt: 'Discover the latest patterns and techniques for creating maintainable, performant React applications that scale with your team and user base.',
    content: 'In this comprehensive guide, we explore modern React development patterns, from component architecture to state management strategies...',
    category: 'Development',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'TypeScript', 'Performance', 'Architecture'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop'
  };

  const recentPosts = [
    {
      id: 2,
      title: 'The Future of Web Development: Trends to Watch',
      excerpt: 'Exploring emerging technologies and methodologies that will shape the future of web development.',
      category: 'Trends',
      publishDate: '2024-01-10',
      readTime: '6 min read',
      tags: ['WebDev', 'Trends', 'Future'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Mastering CSS Grid: A Complete Guide',
      excerpt: 'Everything you need to know about CSS Grid to create complex, responsive layouts with ease.',
      category: 'CSS',
      publishDate: '2024-01-05',
      readTime: '10 min read',
      tags: ['CSS', 'Grid', 'Layout'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Optimizing Database Performance at Scale',
      excerpt: 'Practical strategies for maintaining fast database queries as your application grows.',
      category: 'Backend',
      publishDate: '2023-12-28',
      readTime: '12 min read',
      tags: ['Database', 'Performance', 'Optimization'],
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop'
    },
    {
      id: 5,
      title: 'Design Systems: From Concept to Implementation',
      excerpt: 'How to build and maintain design systems that scale across teams and products.',
      category: 'Design',
      publishDate: '2023-12-20',
      readTime: '7 min read',
      tags: ['Design System', 'UI/UX', 'Components'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop'
    }
  ];

  const categories = ['All', 'Development', 'Design', 'Trends', 'CSS', 'Backend'];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            Blog & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge, experiences, and insights from the world of web development, 
            design, and technology innovation.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Featured Article</h3>
          <Card className="overflow-hidden shadow-elegant hover-lift">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-primary text-white">Featured</Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(featuredPost.publishDate)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                    <Badge variant="outline">{featuredPost.category}</Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="bg-gradient-primary hover:bg-gradient-primary/90 w-fit">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="hover-scale"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Recent Posts Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Recent Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {recentPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="group shadow-card hover-lift overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(post.publishDate)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-semibold leading-tight line-clamp-2">
                      {post.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <Button variant="link" size="sm" className="text-primary p-0 hover-scale">
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="shadow-elegant hover-lift">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to my newsletter for the latest articles, tutorials, and insights 
              delivered directly to your inbox. No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-primary hover:bg-gradient-primary/90 px-6">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BlogSection;