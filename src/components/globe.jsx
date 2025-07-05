import IconCloud from "./ui/icon-cloud";

const slugs = [
  "html5",
  "css3",
  "javascript",
  "bootstrap",
  "tailwindcss",
  "react",
  "java",
  "spring",
  "springboot",
  "oracle",
  "postgresql",
  "firebase",
  "amazonaws",
  "docker",
  "git",
  "github",
  "gitlab",
  "jira",
  "sonarqube",
  "visualstudiocode",
  "figma",
  "vercel",
];


function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
