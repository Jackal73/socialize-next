"use client";

import { useUser } from "@clerk/nextjs";
import { Comment, User } from "@prisma/client";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type CommentWithUser = Comment & { user: User };

const CommentList = ({
  comments,
  postId,
}: {
  comments: CommentWithUser[];
  postId: number;
}) => {
  const { user } = useUser();
  const [commentState, setCommentState] = useState(comments);
  const [desc, setDesc] = useState("");

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    commentState,
    (state, value: CommentWithUser) => [value, ...state]
  );

  return (
    <>
      {user && (
        <div className="flex items-center gap-4">
          <Image
            src={user.imageUrl || "/noAvatar.png"}
            alt=""
            width={28}
            height={28}
            className="w-7 h-7 rounded-full"
          />
          <form
            action=""
            className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full"
          >
            <input
              type="text"
              placeholder="Write a comment..."
              className="bg-transparent outline-none flex-1"
              onChange={(e) => setDesc(e.target.value)}
            />
            <Image
              src="/emoji.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </form>
        </div>
      )}
      {/* COMMENTS */}
      <div className="">
        {/* COMMENT */}
        {optimisticComments.map((comment) => (
          <div
            className="flex gap-4 justify-between mt-6 ml-2"
            key={comment.id}
          >
            {/* AVATAR */}
            <Image
              src={comment.user.avatar || "/noAvatar.png"}
              alt=""
              width={28}
              height={28}
              className="w-7 h-7 rounded-full"
            />
            {/* DESCRIPTION */}
            <div className="flex flex-col gap-2 flex-1 text-sm">
              <span className="font-medium">
                {comment.user.name && comment.user.surname
                  ? comment.user.name + " " + comment.user.surname
                  : comment.user.username}
              </span>
              <p className="text-sm">{comment.desc}</p>
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
                  <span className="text-gray-500">0 Likes</span>
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
        ))}
      </div>

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
    </>
  );
};

export default CommentList;
