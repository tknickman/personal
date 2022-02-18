// import { UnderArmour, SurveyMonkey, Momentive } from "@tek/icons";
// import clsx from "clsx";
// import { useState } from "react";

// const timeline = [
//   {
//     id: 1,
//     title: "Senior Software Engineer",
//     company: "Momentive.ai",
//     href: "#",
//     date: "Sep 30",
//     datetime: "2020-09-30",
//     icon: Momentive,
//   },
//   {
//     id: 2,
//     title: "Senior Software Engineer",
//     company: "SurveyMonkey",
//     href: "#",
//     date: "Sep 30",
//     datetime: "2020-09-30",
//     icon: SurveyMonkey,
//   },
//   {
//     id: 3,
//     title: "Lead Software Engineer",
//     company: "Under Armour",
//     href: "#",
//     date: "Sep 30",
//     datetime: "2020-09-30",
//     icon: UnderArmour,
//   },
//   {
//     id: 4,
//     title: "Senior Software Engineer",
//     company: "Under Armour",
//     href: "#",
//     date: "Sep 30",
//     datetime: "2020-09-30",
//     icon: UnderArmour,
//   },
//   {
//     id: 5,
//     title: "Engineering Manager",
//     company: "SurveyMonkey",
//     href: "#",
//     date: "Sep 30",
//     datetime: "2020-09-30",
//     icon: SurveyMonkey,
//   },
//   {
//     id: 6,
//     title: "Software Engineer II",
//     company: "SurveyMonkey",
//     href: "#",
//     date: "Sep 30",
//     datetime: "2020-09-30",
//     icon: SurveyMonkey,
//   },
//   {
//     id: 7,
//     title: "Software Engineer I",
//     company: "SurveyMonkey",
//     href: "#",
//     date: "Sep 30",
//     datetime: "2020-09-30",
//     icon: SurveyMonkey,
//   },
//   {
//     id: 8,
//     title: "Software Engineer Intern",
//     company: "SurveyMonkey",
//     href: "#",
//     date: "Sep 30",
//     datetime: "2020-09-30",
//     icon: SurveyMonkey,
//   },
// ];

// function Timeline({ selected, setSelected }) {
//   return (
//     <div>
//       <ul role="list" className="divide-y divide-gray-200">
//         {timeline.map((item) => (
//           <li
//             key={item.id}
//             className={clsx("py-4 px-4", {
//               "bg-white": selected === item.id,
//               "bg-gray-50": selected !== item.id,
//             })}
//             role="button"
//             onClick={() => setSelected(item.id)}
//           >
//             <div className="flex space-x-3">
//               <item.icon className="w-8 h-8" />
//               <div className="flex-1 space-y-1">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-sm font-medium">{item.title}</h3>
//                   <p className="text-sm text-gray-500">
//                     <time dateTime={item.datetime}>{item.date}</time>
//                   </p>
//                 </div>
//                 <p className="text-sm text-gray-500">{item.company}</p>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const Details = ({ selected }) => (
//   <div className="overflow-hidden bg-white shadow sm:rounded-lg">
//     <div className="px-4 py-5 sm:px-6">
//       <h3 className="text-lg font-medium leading-6 text-gray-900">
//         Applicant Information
//       </h3>
//       <p className="max-w-2xl mt-1 text-sm text-gray-500">
//         Personal details and application.
//       </p>
//     </div>
//     <div className="px-4 py-5 border-t border-gray-200 sm:px-6">
//       <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
//         <div className="sm:col-span-1">
//           <dt className="text-sm font-medium text-gray-500">Full name</dt>
//           <dd className="mt-1 text-sm text-gray-900">Margot Foster</dd>
//         </div>
//         <div className="sm:col-span-1">
//           <dt className="text-sm font-medium text-gray-500">Application for</dt>
//           <dd className="mt-1 text-sm text-gray-900">Backend Developer</dd>
//         </div>
//         <div className="sm:col-span-1">
//           <dt className="text-sm font-medium text-gray-500">Email address</dt>
//           <dd className="mt-1 text-sm text-gray-900">
//             margotfoster@example.com
//           </dd>
//         </div>
//         <div className="sm:col-span-1">
//           <dt className="text-sm font-medium text-gray-500">
//             Salary expectation
//           </dt>
//           <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
//         </div>
//         <div className="sm:col-span-2">
//           <dt className="text-sm font-medium text-gray-500">About</dt>
//           <dd className="mt-1 text-sm text-gray-900">
//             Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
//             incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
//             consequat sint. Sit id mollit nulla mollit nostrud in ea officia
//             proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit
//             deserunt qui eu.
//           </dd>
//         </div>
//       </dl>
//     </div>
//   </div>
// );

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Example() {
//   const [selected, setSelected] = useState<number>(timeline[0].id);
//   return (
//     <div className="relative flex flex-col min-h-screen mt-16">
//       <h2 className="mt-5 ml-5 text-4xl font-extrabold text-gray-800 sm:text-5xl sm:tracking-tight lg:text-6xl">
//         Positions
//       </h2>
//       <div className="w-full mx-auto max-w-7xl xl:px-8 lg:flex">
//         {/* Left sidebar & main wrapper */}
//         <div className="flex-1 flex-grow min-w-0 xl:flex">
//           <div className="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-96 xl:border-gray-200 sm:rounded-lg">
//             <div className="h-full">
//               {/* Start left column area */}
//               <div className="relative h-full">
//                 <Timeline selected={selected} setSelected={setSelected} />
//               </div>
//               {/* End left column area */}
//             </div>
//           </div>

//           <div className="lg:min-w-0 lg:flex-1">
//             <div className="h-full px-4 pb-6 sm:px-6 lg:px-8">
//               {/* Start main area*/}
//               <div className="relative h-full">
//                 <Details />
//               </div>
//               {/* End main area */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export const Experience = () => {
  return null;
};
