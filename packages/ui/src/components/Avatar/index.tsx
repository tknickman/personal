import AvatarProps from "./types";

const Avatar = ({ href, image, profile }: AvatarProps) => (
  <a href={href} className="group block flex-shrink-0">
    <div className="flex items-center">
      <div>
        <img
          className="inline-block h-9 w-9 rounded-full"
          src={image.src}
          alt=""
        />
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
          {profile.name}
        </p>
        <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
          View profile
        </p>
      </div>
    </div>
  </a>
);

export default Avatar;
