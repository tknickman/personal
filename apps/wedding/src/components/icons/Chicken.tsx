import clsx from 'clsx'

const Chicken = ({
  className,
  selected = false,
  disabled = false,
}: {
  className?: string
  selected?: boolean
  disabled?: boolean
}) => {
  return (
    <svg
      viewBox="0 0 224 289"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, 'h-7 w-10', {
        'fill-primary': !selected,
        'fill-gold': selected,
        'opacity-50': disabled,
      })}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M180.351 3.41898C175.383 7.80898 170.674 15.293 170.674 18.799C170.674 20.323 171.799 23.095 173.174 24.959C177.41 30.7 177.328 30.886 161.461 51.459C158.916 54.759 153.867 62.409 150.24 68.459C146.612 74.509 142.344 80.809 140.754 82.459C137.839 85.483 132.017 88.308 116.992 93.989C112.492 95.69 105.742 99.07 101.992 101.499C98.2424 103.929 94.1704 105.926 92.9434 105.938C90.3944 105.962 90.0764 104.965 89.2434 94.348C88.9374 90.437 87.8154 83.002 86.7504 77.827C81.7114 53.338 73.9964 39.703 61.6344 33.439C54.2004 29.672 47.1944 28.502 40.4504 29.902C33.4694 31.351 31.7104 33.211 31.9374 38.903C32.1024 43.027 31.8174 43.529 27.1434 47.359C15.7854 56.669 9.81342 63.933 6.41742 72.572C3.07942 81.062 -0.493607 96.448 0.0563931 99.959C2.25339 113.969 4.51539 122.002 7.54739 126.566C10.6394 131.219 10.7604 131.753 10.0214 137.459C8.58239 148.571 9.44641 152.782 14.2274 157.959C15.4964 159.334 17.5354 163.159 18.7584 166.459C21.0284 172.587 27.1314 179.959 29.9344 179.959C30.7564 179.959 31.9874 179.287 32.6684 178.466C33.3494 177.645 35.6844 176.495 37.8564 175.91C43.2074 174.469 47.2954 175.944 52.2364 181.097C54.4024 183.356 58.4244 186.225 61.1744 187.473C66.6944 189.979 69.3004 192.531 72.2264 198.297C75.7604 205.26 80.3354 209.561 88.8934 213.968C93.4474 216.313 98.0924 219.343 99.2144 220.701C100.335 222.058 103.485 223.909 106.214 224.814L111.174 226.459L111.094 231.959C111.043 235.456 111.484 237.742 112.304 238.236C113.013 238.664 113.864 240.689 114.194 242.736C114.524 244.784 115.486 247.728 116.331 249.278C117.184 250.842 118.337 257.066 118.921 263.261L119.974 274.426L116.626 280.692C114.785 284.139 112.804 286.966 112.226 286.974C111.647 286.983 111.771 287.368 112.5 287.83C113.26 288.312 115.362 288.143 117.423 287.434C119.848 286.601 122.022 286.494 124.097 287.109C125.789 287.609 132.574 288.034 139.174 288.053C148.567 288.079 152.535 287.646 157.439 286.06C160.884 284.945 164.379 284.292 165.205 284.609C167.619 285.536 177.674 283.945 177.67 282.637C177.668 281.989 175.531 280.642 172.92 279.643C159.093 274.352 157.224 272.673 155.21 263.73C154.226 259.362 154.388 256.974 156.343 247.046C157.597 240.673 158.635 232.948 158.649 229.878C158.688 221.201 162.285 203.274 165.17 197.378C166.745 194.159 169.736 190.419 172.761 187.886C178.301 183.248 185.814 173.29 188.268 167.333C191.837 158.671 193.083 156.89 198.367 152.901C209.217 144.709 212.511 132.68 213.688 96.959C214.122 83.754 215.034 71.15 215.77 68.187C216.851 63.831 216.847 61.922 215.75 57.187C213.125 45.86 213.181 44.291 216.321 41.225C217.89 39.692 220.147 37.768 221.337 36.949L223.5 35.459L220.293 27.279C216.199 16.836 208.95 6.81399 203.915 4.63699C199.548 2.74899 188.713 -0.060023 186.03 0.00097698C185.009 0.023977 182.454 1.56198 180.351 3.41898ZM141.492 244.709C144.79 249.351 146.562 254.698 146.521 259.885C146.5 262.611 146.749 265.271 147.074 265.797C148.135 267.514 146.482 272.874 144.1 275.445C141.265 278.504 137.499 278.683 133.65 275.942C127.857 271.817 127.238 260.524 132.191 249.326C135.808 241.146 138.139 239.989 141.492 244.709Z"
      />
    </svg>
  )
}

export default Chicken
