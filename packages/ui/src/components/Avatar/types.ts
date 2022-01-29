type Image = {
  src: string;
  alt: string;
};

type Profile = {
  name: string;
};

type AvatarProps = {
  image: Image;
  href: string;
  profile: Profile;
};

export default AvatarProps;
