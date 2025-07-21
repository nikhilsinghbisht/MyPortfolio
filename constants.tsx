

import React from 'react';
import type { Project, Skill, Experience, Education, Achievement } from './types';

export const socialLinks = {
  email: "mailto:nb9690@gmail.com",
  linkedin: "https://www.linkedin.com/in/nikhil-singh-bisht-948107263/",
  github: "https://github.com/nikhilsinghbisht",
};

export const aboutMeText = "I'm a Computer Science graduate with a CGPA of 9.45, skilled in backend development, automation, and building scalable systems. During my internship at Myntra, I led projects on Amazon and Instagram onboarding, streamlining large-scale data ingestion pipelines. I was also a finalist at JPMorgan Chase & Co. Code for Good 2024, showcasing my ability to build impactful solutions under pressure.";
export const avatarUrl = "https://avatars.githubusercontent.com/u/113038639?v=4";
export const aboutMeAvatarUrl = "/images/avatar.png";

export const SocialIcons = {
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  ),
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  ),
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
  ),
};

const SkillIconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="w-full h-full text-slate-700 dark:text-slate-200">{children}</div>
);

export const SkillIcons = {
    Java: <SkillIconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Java</title><path d="M8.84 15.65v-2.3c0-1.22.18-2.2.53-2.95.35-.75.87-1.32 1.56-1.72s1.5-.6 2.4-.6c.88 0 1.63.2 2.25.6.62.4 1.1 1 1.45 1.75.35.75.52 1.73.52 2.95v2.3c0 1.9-.32 3.4-1.12 4.4S14.28 21 12.9 21c-1.2 0-2.2-.4-3-1.2s-1.1-2-1.1-3.15zm3.2-.3v.3c0 .58.12.9.35 1.25.24.34.6.5 1.05.5.45 0 .8-.16 1.05-.5.25-.35.35-.67.35-1.25v-.3c0-1.05-.1-1.8-.3-2.25-.2-.45-.5-.6-.9-.6-.4 0-.7.15-.9.6-.2.45-.3.9-.3 2.25zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2.8 21.6C6.5 21.1 5 19.7 4 17.5c-1-2.2-1-4.8 0-7 .9-2.1 2.4-3.5 4.1-4.2L9.2 8c-.6 1-.4 2.3.4 3.1.8.8 2.1 1 3.1.4l1.7 1.7c-.7 1.7-2.1 3.2-4.2 4.1-1 .3-1.8.3-2.4.3zm8.9-3.7c1.4-1.4 2.2-3.3 2.2-5.4V10c0-2.5-1.1-4.6-2.8-5.8-1.7-1.2-4-1.6-6.1-1.1l1.7 1.7c1.3-.2 2.5.2 3.4 1.1.9.9 1.3 2.1 1.1 3.4l1.7 1.7c.4-.9.4-1.9 0-2.8l-4-4c-.9-.9-2.3-.9-3.1 0l-4 4c-.9.9-.9 2.3 0 3.1l.9.9c.7-.5 1.6-.6 2.4-.3l1.7-1.7c-.9-1.2-2.5-1.7-3.9-1.2L8 8.1c-2 .8-3.4 2.3-4.1 4.2-1 2.3-1 5 0 7.3.8 1.9 2.2 3.4 3.9 4.2l.9.4.9-.9.9.9.9.9c2.3.8 4.9.7 7.1-.1zm-1-6.8z"/></svg></SkillIconWrapper>,
    Python: <SkillIconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Python</title><path d="M11.238 17.82c.49 0 .862-.333.862-.785v-3.364c0-.452-.372-.785-.862-.785H8.318c-.49 0-.862.333-.862.785v1.57c0 .452.372.785.862.785h1.24v.942c0 .452.372.785.862.785h.818zM12.01 6.18c-.49 0-.862.333-.862.785v3.364c0 .452.372.785.862.785h2.92c.49 0 .862-.333.862-.785V8.535c0-.452-.372-.785-.862-.785h-1.24v-.942c0-.452-.372-.785-.862-.785h-.818zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.662 13.153v-1.57c0-2.376-1.92-4.298-4.298-4.298h-.818c-1.22 0-2.25.43-3.03 1.21-.78.78-1.21 1.812-1.21 3.03v.818c0 1.22.43 2.25 1.21 3.03.78.78 1.812 1.21 3.03 1.21h1.635c2.378 0 4.298-1.922 4.298-4.298v-.03zm-7.352-1.57c0-2.376 1.92-4.298 4.298-4.298h.818c1.22 0 2.25.43 3.03 1.21.78.78 1.21 1.812 1.21 3.03v1.635c0 2.376-1.92 4.298-4.298 4.298h-.818c-1.22 0-2.25-.43-3.03-1.21-.78-.78-1.21-1.812-1.21-3.03v-1.635z"/></svg></SkillIconWrapper>,
    Cplus: <SkillIconWrapper>
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <title>C++</title>
    <path d="M0 12c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12zm10.872-2.468H9.744v4.936h1.128V12h2.256v2.468h1.128V9.532h-1.128V12h-2.256zm7.128 1.062h-1.416V9.532h-1.128v1.532h-1.416v1.112h1.416v1.53h1.128v-1.53h1.416v-1.112zm-8.108.406c0-.605-.183-1.085-.547-1.437-.363-.353-.917-.528-1.66-.528-.563 0-1.008.115-1.338.347-.327.229-.547.566-.653 1.006h1.093c.05-.174.14-.309.272-.405.132-.095.323-.143.573-.143.341 0 .571.114.687.342.056.106.083.248.08.426v.344h-1.285c-.352.01-.6.066-.744.17-.145.104-.217.253-.217.444 0 .246.1.425.302.536.202.11.454.166.754.166.43 0 .748-.092.956-.276.207-.183.348-.47.413-.86zm-1.689.576c-.127 0-.243-.018-.347-.052-.104-.035-.156-.104-.156-.207 0-.112.048-.185.144-.217.097-.032.2-.048.308-.048h1.088v.143c-.018.135-.07.268-.156.36-.085.094-.223.141-.419.141z"/>
  </svg>
</SkillIconWrapper>,

    SpringBoot: <SkillIconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Spring Boot</title><path d="M22.518 9.354c-.216-1.045-.612-2.015-1.188-2.915a10.452 10.452 0 00-2.822-2.823c-.899-.576-1.869-.97-2.914-1.187-1.133-.233-2.288-.233-3.422 0-1.045.217-2.015.61-2.914 1.187a10.452 10.452 0 00-2.822 2.823c-.576.9-.972 1.87-1.188 2.915-.234 1.134-.234 2.288 0 3.423.216 1.045.612 2.015 1.188 2.915a10.452 10.452 0 002.822 2.823c.9.576 1.87.97 2.914 1.187 1.134.234 2.289.234 3.423 0 1.045-.217 2.015-.61 2.914-1.187a10.452 10.452 0 002.822-2.823c.576-.9.972-1.87 1.188-2.915.234-1.135.234-2.289 0-3.423M12 20.219c-4.23 0-7.78-3.255-8.2-7.41h2.51c.384 2.654 2.618 4.76 5.346 4.76s4.962-2.106 5.347-4.76h2.51c-.42 4.155-3.97 7.41-8.2 7.41m-.344-6.385c-1.93 0-3.5-1.568-3.5-3.5s1.57-3.5 3.5-3.5a3.52 3.52 0 013.5 3.5c0 1.932-1.57 3.5-3.5 3.5"/></svg></SkillIconWrapper>,
    NodeJs: <SkillIconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Node.js</title><path d="M12.001 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zM8.995 8.355a1.53 1.53 0 0 1 1.53-1.53h.997l4.636 7.647v-5.46a1.53 1.53 0 0 1 1.53-1.53h.996a1.53 1.53 0 0 1 1.53 1.53V17.2a1.53 1.53 0 0 1-1.53 1.53h-1.004a1.021 1.021 0 0 1-.849-.46l-4.63-7.64v5.452a1.53 1.53 0 0 1-1.53 1.53h-.996a1.53 1.53 0 0 1-1.53-1.53V9.885c0-.84.683-1.53 1.53-1.53zm-5.74 3.754a1.644 1.644 0 0 1 1.643-1.643h.369a1.644 1.644 0 0 1 1.643 1.643v4.425a1.644 1.644 0 0 1-1.643 1.643h-.369a1.644 1.644 0 0 1-1.643-1.643v-4.425z"/></svg></SkillIconWrapper>,
    ReactJs: <SkillIconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>React</title><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4.32-8.81c.14-.37.39-.7.71-1.02.32-.31.65-.56.98-.79.33-.22.62-.4.88-.55.26-.15.48-.26.69-.35.21-.08.38-.13.52-.15.14-.02.26-.03.36-.03.11 0 .22.01.32.03.1.02.2.05.3.08s.18.07.26.12c.08.05.15.1.21.17s.12.14.17.22c.05.08.09.17.12.26.03.09.05.19.07.29.01.1.02.2.02.31 0 .12-.01.24-.03.35-.02.11-.05.22-.09.32s-.1.2-.16.29c-.06.09-.13.18-.21.26s-.18.15-.28.22c-.1.07-.22.13-.34.18s-.25.1-.38.14c-.13.04-.26.08-.4.11s-.28.06-.43.08c-.15.02-.3.04-.45.05-.16.01-.31.02-.47.02-.17 0-.34-.01-.5-.03s-.33-.05-.48-.09c-.16-.04-.3-.09-.44-.15s-.28-.13-.4-.22c-.12-.08-.23-.18-.33-.3s-.18-.25-.25-.39c-.07-.15-.12-.3-.15-.46s-.05-.33-.05-.5.01-.34.04-.5zm4.32 5.09c-.27.14-.54.25-.82.35s-.55.17-.82.23c-.27.06-.52.09-.76.1s-.46.02-.67.02c-.22 0-.44-.01-.66-.02s-.43-.04-.63-.07c-.2-.03-.4-.08-.59-.14s-.37-.14-.54-.23c-.17-.09-.33-.2-.48-.32s-.29-.27-.42-.42c-.13-.16-.24-.33-.34-.51s-.18-.38-.25-.59c-.07-.21-.12-.43-.16-.65s-.06-.45-.06-.68c0-.24.02-.48.06-.71s.09-.45.16-.67.15-.42.25-.62.22-.38.35-.55c.13-.17.28-.32.44-.46s.33-.27.51-.38c.18-.11.37-.2.56-.27.19-.07.39-.13.59-.17.2-.04.4-.07.6-.09s.4-.03.59-.03c.21 0 .42.01.62.03s.39.04.58.07c.19.03.37.07.54.12s.33.11.48.18c.15.07.29.15.42.24s.25.19.36.31c.11.12.21.25.29.39s.15.29.2.45c.05.16.09.32.12.49s.05.34.05.52c0 .19-.02.38-.05.57s-.07.36-.12.54c-.05.17-.11.33-.18.49s-.15.3-.24.44c-.09.14-.19.27-.3.39s-.23.23-.36.33c-.13.1-.26.19-.4.27s-.28.15-.42.22c-.14.07-.29.13-.43.18s-.28.1-.43.14c-.15.04-.29.07-.44.1zm.32-2.54c.14.02.27.03.4.03.13 0 .26-.01.38-.02s.24-.04.35-.06.21-.06.31-.09.19-.07.28-.11.17-.1.25-.15.15-.11.22-.17.13-.13.18-.2c.06-.07.1-.14.14-.22s.07-.16.1-.25c.03-.09.05-.18.06-.27.01-.09.02-.19.02-.28 0-.1-.01-.2-.02-.29s-.03-.18-.06-.27c-.02-.09-.05-.17-.09-.25s-.1-.15-.15-.22c-.05-.07-.11-.14-.18-.2s-.15-.13-.23-.19c-.08-.06-.17-.12-.26-.17s-.19-.11-.29-.16c-.1-.05-.21-.09-.32-.13s-.23-.08-.34-.11c-.11-.03-.23-.05-.34-.07s-.22-.03-.33-.04c-.11-.01-.22-.01-.33-.01s-.22 0-.33.01c-.11.01-.22.02-.33.04s-.22.04-.33.07c-.11.03-.22.05-.32.08s-.2.07-.3.11c-.1.04-.19.09-.28.14s-.17.11-.25.17c-.08.06-.15.13-.21.2s-.12.15-.17.22c-.05.08-.09.16-.12.25s-.05.18-.07.28c-.02.1-.03.2-.03.3s.01.2.03.3c.02.1.04.19.07.28s.07.18.12.26c.05.09.1.17.17.25s.13.15.21.22c.08.07.17.14.26.2s.19.12.29.17c.1.05.21.1.32.14s.22.09.34.13c.11.04.23.07.34.1s.23.05.34.06c.11.01.23.02.34.02z"/></svg></SkillIconWrapper>,
    MongoDB: <SkillIconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>MongoDB</title><path d="M12.18.204c-1.13.23-2.21.69-3.13 1.34-.92.65-1.74 1.48-2.39 2.45-1.17 1.74-1.92 3.84-2.15 6.06-.23 2.22.05 4.49.79 6.6.45 1.25 1.07 2.44 1.84 3.52.77 1.08 1.68 2.05 2.69 2.87.5.42.98.79 1.42 1.1l-.81-2.93c-.1-.36-.05-.75.14-1.06.19-.31.49-.51.83-.55.72-.08 1.34.42 1.42 1.14l.82 2.94c.33-.2.66-.41.98-.63l.85-2.98c.1-.36.05-.75-.14-1.06-.19-.31-.49-.51-.83-.55-.72-.08-1.34.42-1.42 1.14l-.82 2.94c1.11-.69 2.11-1.55 2.94-2.58.83-1.03 1.5-2.2 1.98-3.45.96-2.45.96-5.1.04-7.58-.92-2.48-2.73-4.51-5.02-5.71a10.027 10.027 0 00-3.3-1.01zm-1.7 13.58c-.53 0-.96.43-.96.96s.43.96.96.96.96-.43.96-.96-.43-.96-.96-.96z"/></svg></SkillIconWrapper>,
    Git: <SkillIconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Git</title><path d="M22.012 8.448l-4.46-4.46a3.868 3.868 0 0 0-5.474 0l-1.11 1.11 6.582 6.582 4.462-4.462a3.867 3.867 0 0 0 0-5.47zm-18.06 9.596l4.46 4.46a3.868 3.868 0 0 0 5.474 0l1.11-1.11-6.582-6.582-4.462 4.462a3.867 3.867 0 0 0 0 5.47zM8.88 8.328l-6.583 6.582a3.867 3.867 0 0 0 0 5.47l.487.487a3.868 3.868 0 0 0 5.474 0l6.582-6.582-6.02-6.02-.94.94zm6.02-6.02l-6.582 6.582 6.02 6.02 6.582-6.582a3.868 3.868 0 0 0 0-5.474l-.487-.487a3.868 3.868 0 0 0-5.473 0z"/></svg></SkillIconWrapper>,
    Selenium: <SkillIconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Selenium</title><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 21.6a9.6 9.6 0 1 1 0-19.2 9.6 9.6 0 0 1 0 19.2zM12 4.8a7.2 7.2 0 1 0 0 14.4 7.2 7.2 0 0 0 0-14.4z"/><path d="m11.16 6.84-4.8 4.8 4.8 4.8L12 15.6l-3.96-3.96L12 7.92zm1.68 0-1.08 1.08 3.96 3.96-3.96 3.96 1.08 1.08 4.8-4.8z"/></svg></SkillIconWrapper>,
    SQL: <SkillIconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>SQL</title><path d="M4.38 4.018a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h.75v-15h-.75zm1.5 15V4.018h4.5c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5h-4.5v6zm13.12 1.482a1.5 1.5 0 001.5-1.5v-12a1.5 1.5 0 00-1.5-1.5h-.75v15h.75zm-1.5-15V19.018h-4.5c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5h4.5v-6z"></path></svg></SkillIconWrapper>,
    DSA: <SkillIconWrapper><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 20v2M5 12H3M21 12h-2M12 6a2 2 0 100-4 2 2 0 000 4zM12 14a2 2 0 100-4 2 2 0 000 4zM12 22a2 2 0 100-4 2 2 0 000 4zM7 12a2 2 0 100-4 2 2 0 000 4zM17 12a2 2 0 100-4 2 2 0 000 4zM7 12a2 2 0 100 4 2 2 0 000-4zM17 12a2 2 0 100 4 2 2 0 000-4zM12 14l-3 3M12 14l3 3M12 8L9 5M12 8l3-3"/></svg></SkillIconWrapper>,
    Web3: <SkillIconWrapper><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></SkillIconWrapper>,
    RestApi: <SkillIconWrapper><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg></SkillIconWrapper>,
    CICD: <SkillIconWrapper><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12c0-2.2-1.4-4-4-4s-4 1.8-4 4 1.8 4 4 4 4-1.8 4-4zm-8-4a4 4 0 100 8 4 4 0 000-8zM12 4V2M12 22v-2M4 12H2M22 12h-2"/></svg></SkillIconWrapper>,
};

export const MyntraIcon = () => (
  <img
    src="https://images.indianexpress.com/2021/01/myntra.png?w=640"
    alt="Myntra Logo"
    className="w-full h-full p-1"
  />
);
export const EducationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-slate-600 dark:text-slate-300 p-1"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 4 3 6 3s6-1.34 6-3v-5"/></svg>
);

const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
);

const DeploymentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);


export const skillsData = [
  {
    category: 'Languages & Core Skills',
    list: [
      { name: 'Java', icon: SkillIcons.Java, proficiency: 80 },
      { name: 'Python', icon: SkillIcons.Python, proficiency: 80 },
     { name: 'C++', icon: SkillIcons.Cplus, proficiency: 95 },
      { name: 'Data Structures & Algorithms', icon: SkillIcons.DSA, proficiency: 95 },
    ],
  },
  {
    category: 'Backend & Frontend',
    list: [
      { name: 'Spring Boot', icon: SkillIcons.SpringBoot, proficiency: 85 },
      { name: 'Node.js', icon: SkillIcons.NodeJs, proficiency: 75 },
      { name: 'React.js', icon: SkillIcons.ReactJs, proficiency: 80 },
    ],
  },
  {
    category: 'Databases & Tools',
    list: [
      { name: 'MongoDB', icon: SkillIcons.MongoDB, proficiency: 85 },
      { name: 'SQL', icon: SkillIcons.SQL, proficiency: 80 },
      { name: 'Git', icon: SkillIcons.Git, proficiency: 95 },
      { name: 'Selenium', icon: SkillIcons.Selenium, proficiency: 50 },
    ],
  },
  {
    category: 'Specialized',
    list: [
      { name: 'Web3 & Blockchain', icon: SkillIcons.Web3, proficiency: 70 },
      { name: 'REST APIs', icon: SkillIcons.RestApi, proficiency: 90 },
      { name: 'CI/CD', icon: SkillIcons.CICD, proficiency: 70 },
    ],
  },
];

export const projectsData: Project[] = [
  {
    title: 'Unisync',
    description: 'A student-centric platform helping users share achievements, post queries, request referrals, and interact in real-time.',
    technologies: ['React.js', 'Spring Boot', 'Node.js', 'MongoDB', 'WebSocket'],
    githubLink: 'https://github.com/nikhilsinghbisht/Unisync-3.0',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    status: 'Locally Live'
  },
  {
    title: 'Secure Blockchain Voting System',
    description: 'Blockchain-based secure voting platform built for university elections to ensure transparency and tamper-proof records.',
    technologies: ['Solidity', 'React.js', 'MongoDB', 'Web3.js'],
    githubLink: 'https://github.com/nikhilsinghbisht/E-Voting-System-Based-On-BlockChain',
    imageUrl: 'https://innovationatwork.ieee.org/wp-content/uploads/2017/12/bigstock-Businessman-in-blockchain-cryp-196818127-1024x683.jpg',
    status: 'Locally Live'
  },
  {
    title: 'Amazon Lightweight Crawl',
    description: 'Developed during my Myntra internship, this automation reduced product data extraction time by crawling category pages directly.',
    technologies: ['Python', 'Selenium', 'Cron Jobs'],
    githubLink: 'https://github.com/nikhilsinghbisht',
    imageUrl: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    status: 'Internal Tool'
  },
  {
    title: 'Instagram Onboarding Automation',
    description: 'Automated Instagram content onboarding using Groovy and Fetcher, integrating it with Myntra\'s Vorta backend system.',
    technologies: ['Groovy', 'REST APIs', 'Fetcher'],
    githubLink: 'https://github.com/nikhilsinghbisht',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    status: 'Internal Tool'
  },
  {
    title: 'Travel-Itinerary-Generator',
    description: 'A smart planner that auto-generates travel itineraries based on user input.',
    technologies: ['React.js', 'OpenAI API', 'JavaScript'],
    githubLink: 'https://github.com/nikhilsinghbisht/Travel-Itinerary-Generator',
    imageUrl: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    status: 'Locally Live'
  },
  {
    title: 'Book Inventory Builder (AI)',
    description: 'An intelligent platform for digitizing book collections using AI-powered image-to-text processing (OCR).',
    technologies: ['React.js', 'Node.js', 'Python', 'Tesseract.js', 'MongoDB'],
    githubLink: 'https://github.com/nikhilsinghbisht/Book-Inventory-Builder---PRD',
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    status: 'Locally Live'
  }
];

export const experienceData: Experience[] = [
    {
        role: 'Backend Developer Intern',
        company: 'Myntra',
        period: '2024-2025',
        description: [
            'Automated Amazon source onboarding with Python to improve crawl efficiency.',
            'Led Instagram content integration with Myntra’s internal Vorta platform using Groovy.',
            'Designed scalable ingestion pipelines, reduced manual effort in source integration.',
        ],
        icon: <MyntraIcon />,
    }
];

export const educationData: Education[] = [
    {
        degree: 'BTech in Computer Science',
        institution: 'Graphic Era Hill University',
        period: '2021-2025',
        grade: 'CGPA: 9.45 / 10.0',
        icon: <EducationIcon />,
    }
];

export const achievementsData: Achievement[] = [
    {
        title: 'Finalist - JPMorgan Chase & Co. Code for Good 2024',
        description: 'Selected as a finalist, building an impactful solution for a non-profit organization under intense time pressure.',
        icon: <TrophyIcon />,
    },
    {
        title: 'Internal Tools Deployed at Myntra',
        description: 'My internship projects for Amazon and Instagram automation were deployed for internal usage, improving team efficiency.',
        icon: <DeploymentIcon />,
    },
];

export const blogPosts = [
    {
        title: 'The Art of Scalable Backend Systems: A Deep Dive',
        date: 'Coming Soon',
        link: '#blog'
    },
    {
        title: 'Why I Chose Spring Boot Over Node.js for My Latest Project',
        date: 'Coming Soon',
        link: '#blog'
    },
    {
        title: 'A Developer\'s Guide to Web3: First Steps into the Decentralized World',
        date: 'Coming Soon',
        link: '#blog'
    },
    {
        title: 'My Internship Learnings: From Code to Production at Myntra',
        date: 'Coming Soon',
        link: '#blog'
    },
    {
        title: 'Tackling Technical Debt in a Fast-Paced Startup Environment',
        date: 'Coming Soon',
        link: '#blog'
    },
];