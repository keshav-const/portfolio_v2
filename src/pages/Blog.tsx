// import { Calendar, Clock, ArrowRight } from 'lucide-react';

// export default function Blog() {
//   const blogPosts = [
//     {
//       id: 1,
//       title: 'Building Scalable React Applications',
//       excerpt: 'Learn best practices for structuring large-scale React applications with modern patterns and performance optimization techniques.',
//       date: '2024-03-15',
//       readTime: '8 min read',
//       category: 'React',
//       slug: 'building-scalable-react-applications',
//     },
//     {
//       id: 2,
//       title: 'The Future of Web3 Development',
//       excerpt: 'Exploring the intersection of blockchain technology and web development, and what it means for the future of the internet.',
//       date: '2024-03-10',
//       readTime: '6 min read',
//       category: 'Web3',
//       slug: 'future-of-web3-development',
//     },
//     {
//       id: 3,
//       title: 'TypeScript Best Practices in 2024',
//       excerpt: 'A comprehensive guide to writing clean, type-safe TypeScript code with modern tooling and advanced patterns.',
//       date: '2024-03-05',
//       readTime: '10 min read',
//       category: 'TypeScript',
//       slug: 'typescript-best-practices-2024',
//     },
//     {
//       id: 4,
//       title: 'Mastering Node.js Performance',
//       excerpt: 'Deep dive into optimizing Node.js applications for production, including profiling, caching strategies, and scaling techniques.',
//       date: '2024-02-28',
//       readTime: '12 min read',
//       category: 'Node.js',
//       slug: 'mastering-nodejs-performance',
//     },
//     {
//       id: 5,
//       title: 'CSS Grid vs Flexbox: When to Use What',
//       excerpt: 'Understanding the strengths of each layout system and making informed decisions for your responsive designs.',
//       date: '2024-02-20',
//       readTime: '7 min read',
//       category: 'CSS',
//       slug: 'css-grid-vs-flexbox',
//     },
//     {
//       id: 6,
//       title: 'Serverless Architecture Patterns',
//       excerpt: 'Exploring modern serverless patterns, from API gateways to event-driven architectures, with real-world examples.',
//       date: '2024-02-15',
//       readTime: '9 min read',
//       category: 'Cloud',
//       slug: 'serverless-architecture-patterns',
//     },
//   ];

//   return (
//     <div className="min-h-screen py-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Blog</h1>
//         <p className="text-xl text-gray-400 mb-16 max-w-3xl">
//           Thoughts, insights, and tutorials about web development, technology, and everything in between.
//         </p>

//         <div className="space-y-8">
//           {blogPosts.map((post) => (
//             <article
//               key={post.id}
//               className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/50 transition-all hover:shadow-xl hover:shadow-white/10"
//             >
//               <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
//                 <div className="flex-grow">
//                   <div className="flex items-center gap-4 mb-3">
//                     <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
//                       {post.category}
//                     </span>
//                     <div className="flex items-center gap-4 text-gray-500 text-sm">
//                       <span className="flex items-center gap-1">
//                         <Calendar className="w-4 h-4" />
//                         {new Date(post.date).toLocaleDateString('en-US', {
//                           month: 'short',
//                           day: 'numeric',
//                           year: 'numeric',
//                         })}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Clock className="w-4 h-4" />
//                         {post.readTime}
//                       </span>
//                     </div>
//                   </div>

//                   <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors">
//                     {post.title}
//                   </h2>

//                   <p className="text-gray-400 mb-6 leading-relaxed">
//                     {post.excerpt}
//                   </p>

//                   <a
//                     href={`/blog/${post.slug}`}
//                     className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-medium"
//                   >
//                     Read More
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </a>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <p className="text-gray-500">More posts coming soon...</p>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import { Calendar, Clock, ArrowRight, ArrowLeft, Clipboard } from 'lucide-react';

// // Main component that controls which view is shown
// export default function App() {
//   const [selectedPost, setSelectedPost] = useState(null);

//   // Using a single post for the "Coming Soon" page, but with all the fields for the detail view
//   const testPost = {
//     id: 1,
//     title: 'Test Blog',
//     excerpt: 'This is a test blog post to demonstrate the UI and navigation.',
//     date: '2025-06-20',
//     readTime: '1 min read',
//     category: 'Testing',
//     slug: 'test-blog-post',
//     content: {
//       intro: 'This is a test MDX blog post to ensure that everything works fine with the specified UI theme.',
//       list: ['- Hell YEAHH!'],
//       code: `export function greet(name: string) {\n  return \`Hello, \${name}\`;\n}`,
//     },
//   };

//   // Render the detail page if a post is selected, otherwise render the list page
//   if (selectedPost) {
//     return <BlogPostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
//   }

//   return <BlogListPage onPostSelect={() => setSelectedPost(testPost)} post={testPost} />;
// }


// // The "Coming Soon" page, styled exactly like the provided code
// const BlogListPage = ({ onPostSelect, post }) => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white py-24 px-6 font-sans">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Coming soon</h1>
//         <p className="text-xl text-gray-400 mb-16 max-w-3xl">
//           Thoughts, insights, and tutorials about web development, technology, and everything in between.
//         </p>

//         <div className="space-y-8">
//           <article
//             key={post.id}
//             onClick={onPostSelect}
//             className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/50 transition-all hover:shadow-xl hover:shadow-white/10 cursor-pointer"
//           >
//             <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
//               <div className="flex-grow">
//                 <div className="flex items-center gap-4 mb-3">
//                   <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
//                     {post.category}
//                   </span>
//                   <div className="flex items-center gap-4 text-gray-500 text-sm">
//                     <span className="flex items-center gap-1">
//                       <Calendar className="w-4 h-4" />
//                       {new Date(post.date).toLocaleDateString('en-US', {
//                         month: 'short',
//                         day: 'numeric',
//                         year: 'numeric',
//                       })}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <Clock className="w-4 h-4" />
//                       {post.readTime}
//                     </span>
//                   </div>
//                 </div>

//                 <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors">
//                   {post.title}
//                 </h2>

//                 <p className="text-gray-400 mb-6 leading-relaxed">
//                   {post.excerpt}
//                 </p>

//                 <div
//                   className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-medium"
//                 >
//                   Read More
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </div>
//             </div>
//           </article>
//         </div>
//          <div className="mt-16 text-center">
//           <p className="text-gray-500">More posts coming soon...</p>
//         </div>
//       </div>
//     </div>
//   );
// };


// // The detailed view for a single blog post, also styled with the provided theme
// const BlogPostDetail = ({ post, onBack }) => {
  
//   const copyToClipboard = () => {
//     const el = document.createElement('textarea');
//     el.value = post.content.code;
//     document.body.appendChild(el);
//     el.select();
//     document.execCommand('copy');
//     document.body.removeChild(el);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white py-24 px-6 font-sans">
//       <div className="max-w-4xl mx-auto">
//         <button
//           onClick={onBack}
//           className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 font-medium"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           Back to Posts
//         </button>

//         <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/10">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{post.title}</h1>
//              <div className="flex items-center gap-4 mb-10 text-gray-500 text-sm">
//                   <span className="flex items-center gap-1.5">
//                     <Calendar className="w-4 h-4" />
//                      {new Date(post.date).toLocaleDateString('en-US', {
//                           month: 'long',
//                           day: 'numeric',
//                           year: 'numeric',
//                         })}
//                   </span>
//                    <span className="flex items-center gap-1.5">
//                         <Clock className="w-4 h-4" />
//                         {post.readTime}
//                     </span>
//             </div>

//             <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
//                 <h2 className="text-white text-3xl font-bold">Hello, World! 👋</h2>
//                 <p>{post.content.intro}</p>
//                 <ul className="list-disc pl-6">
//                     {post.content.list.map((item, index) => (
//                         <li key={index}>{item.substring(2)}</li>
//                     ))}
//                 </ul>
                
//                 <h3 className="text-white text-2xl font-bold pt-4">Code Example</h3>
//                 <div className="bg-black/50 rounded-xl border border-white/10">
//                     <div className="px-4 py-2 border-b border-white/10 flex justify-between items-center">
//                         <span className="text-sm text-gray-400">Ts</span>
//                         <button onClick={copyToClipboard} className="text-gray-400 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10">
//                             <Clipboard className="w-4 h-4" />
//                         </button>
//                     </div>
//                     <pre className="p-4 overflow-x-auto text-sm"><code>{post.content.code}</code></pre>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, ArrowLeft, Clipboard } from 'lucide-react';

// Main component that controls which view is shown
export default function App() {
  const [selectedPost, setSelectedPost] = useState(null);

  // Using a single post for the "Coming Soon" page, but with all the fields for the detail view
  const testPost = {
    id: 1,
    title: 'Test Blog',
    excerpt: 'This is a test blog post to demonstrate the UI and navigation.',
    date: '2025-06-20',
    readTime: '1 min read',
    category: 'Testing',
    slug: 'test-blog-post',
    content: {
      intro: 'This is a test MDX blog post to ensure that everything works fine with the specified UI theme.',
      list: ['- Hell YEAHH!'],
      code: `export function greet(name: string) {\n  return \`Hello, \${name}\`;\n}`,
    },
  };

  // Render the detail page if a post is selected, otherwise render the list page
  if (selectedPost) {
    return <BlogPostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return <BlogListPage onPostSelect={() => setSelectedPost(testPost)} post={testPost} />;
}


// The "Coming Soon" page, styled exactly like the provided code
const BlogListPage = ({ onPostSelect, post }) => {
  return (
    <div className="min-h-screen text-white py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Coming soon</h1>
        <p className="text-xl text-gray-400 mb-16 max-w-3xl">
          Thoughts, insights, and tutorials about web development, technology, and everything in between.
        </p>

        <div className="space-y-8">
          <article
            key={post.id}
            onClick={onPostSelect}
            className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/50 transition-all hover:shadow-xl hover:shadow-white/10 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <div
                  className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-medium"
                >
                  Read More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </article>
        </div>
         <div className="mt-16 text-center">
          <p className="text-gray-500">More posts coming soon...</p>
        </div>
      </div>
    </div>
  );
};


// The detailed view for a single blog post, also styled with the provided theme
const BlogPostDetail = ({ post, onBack }) => {
  
  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = post.content.code;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <div className="min-h-screen text-white py-24 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Posts
        </button>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{post.title}</h1>
             <div className="flex items-center gap-4 mb-10 text-gray-500 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                     {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                  </span>
                   <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                    </span>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
                <h2 className="text-white text-3xl font-bold">Hello, World! 👋</h2>
                <p>{post.content.intro}</p>
                <ul className="list-disc pl-6">
                    {post.content.list.map((item, index) => (
                        <li key={index}>{item.substring(2)}</li>
                    ))}
                </ul>
                
                <h3 className="text-white text-2xl font-bold pt-4">Code Example</h3>
                <div className="bg-black/50 rounded-xl border border-white/10">
                    <div className="px-4 py-2 border-b border-white/10 flex justify-between items-center">
                        <span className="text-sm text-gray-400">Ts</span>
                        <button onClick={copyToClipboard} className="text-gray-400 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10">
                            <Clipboard className="w-4 h-4" />
                        </button>
                    </div>
                    <pre className="p-4 overflow-x-auto text-sm"><code>{post.content.code}</code></pre>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

