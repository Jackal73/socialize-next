import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/20831616/pexels-photo-20831616/free-photo-of-green-double-door-to-townhouse.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/25748614/pexels-photo-25748614/free-photo-of-a-man-in-a-white-shirt-and-black-pants-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          width={48}
          height={48}
          className="rounded-full w-12 h-12 object-cover absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Edward Snarly</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/25748614/pexels-photo-25748614/free-photo-of-a-man-in-a-white-shirt-and-black-pants-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
            <Image
              src="https://images.pexels.com/photos/25748614/pexels-photo-25748614/free-photo-of-a-man-in-a-white-shirt-and-black-pants-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
            <Image
              src="https://images.pexels.com/photos/25748614/pexels-photo-25748614/free-photo-of-a-man-in-a-white-shirt-and-black-pants-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
          </div>
          <span className="text-xs text-gray-500">76 Followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
