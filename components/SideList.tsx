import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";


type Props = {
  posts: Post[];
}

function SideList({ posts }: Props) {
  return (
    <div>
      <p className="text-green-500 mb-5 font-bold text-3xl text-center tracking-wide">Trending</p>

      <div className="grid grid-cols-1 px-5 gap-5">
        {posts.reverse().map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>        
            <div className="flex flex-col group cursor-pointer">
              <div className="relative w-full h-32 drop-shadow-md
              group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image 
                  className="object-cover object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20
                  bg-black backdrop-blur-xs rounded drop-shadow-xs text-white
                  p-2 flex justify-between items-end">
                  <div>
                    <p className="font-medium">{post.title}</p>

                    <p className="font-thin text-gray-300 text-xs">
                      {new Date(post._createdAt).toLocaleDateString(
                        "en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                    </p>
                  </div>

                  <div className="flex flex-col gap-y-2 items-center">
                    <div className="bg-green-300 text-center text-black
                    px-3 py-1 rounded-full text-xs">
                      <p>{post.categories[0].title}</p>
                    </div>
                  </div>
                </div>
              </div>            
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  )
}

export default SideList