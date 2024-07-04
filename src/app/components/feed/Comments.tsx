import Image from "next/image";

const Comments = () => {
  return (
    <>
      <div className="">
        {/* WRITE */}
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/9320042/pexels-photo-9320042.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            width={28}
            height={28}
            className="w-7 h-7 rounded-full"
          />
          <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
            <input
              type="text"
              placeholder="Write a comment..."
              className="bg-transparent outline-none flex-1"
            />
            <Image
              src="/emoji.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* COMMENTS */}
        <div className="">
          {/* COMMENT */}
          <div className="flex gap-4 justify-between mt-6 ml-2">
            {/* AVATAR */}
            <Image
              src="https://images.pexels.com/photos/26646538/pexels-photo-26646538/free-photo-of-couple-marriage-day.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt=""
              width={28}
              height={28}
              className="w-7 h-7 rounded-full"
            />
            {/* DESCRIPTION */}
            <div className="flex flex-col gap-2 flex-1 text-sm">
              <span className="font-medium">Bernie Hough</span>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="/like.png"
                    alt=""
                    width={12}
                    height={12}
                    className="cursor-pointer w-4 h-4"
                  />
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500">164 Likes</span>
                </div>
                <div className="cursor-pointer font-[500]">Reply</div>
              </div>
            </div>
            {/* ICON */}
            <Image
              src="/more.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer w-4 h-4"
            />
          </div>
        </div>
      </div>
      <div className="">
        {/* WRITE */}
        {/* <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/26646538/pexels-photo-26646538/free-photo-of-couple-marriage-day.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            width={28}
            height={28}
            className="w-7 h-7 rounded-full"
          />
          <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
            <input
              type="text"
              placeholder="Write a comment..."
              className="bg-transparent outline-none flex-1"
            />
            <Image
              src="/emoji.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </div>
        </div> */}
        {/* COMMENTS */}
        <div className="">
          {/* COMMENT */}
          <div className="flex gap-4 justify-between mt-6 ml-2">
            {/* AVATAR */}
            <Image
              src="https://images.pexels.com/photos/26442630/pexels-photo-26442630/free-photo-of-a-row-of-empty-seats-in-a-stadium.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt=""
              width={28}
              height={28}
              className="w-7 h-7 rounded-full"
            />
            {/* DESCRIPTION */}
            <div className="flex flex-col gap-2 flex-1 text-sm">
              <span className="font-medium">Tim Peters</span>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet
                consectetur adipisicing elit.
              </p>
              <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="/like.png"
                    alt=""
                    width={12}
                    height={12}
                    className="cursor-pointer w-4 h-4"
                  />
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500">164 Likes</span>
                </div>
                <div className="cursor-pointer font-[500]">Reply</div>
              </div>
            </div>
            {/* ICON */}
            <Image
              src="/more.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer w-4 h-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
