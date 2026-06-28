import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Atom,
  BookOpenText,
  ChevronRight,
  Cpu,
  FlaskConical,
  GraduationCap,
  Mail,
  MapPin,
  Play,
  Sparkles,
  Workflow,
} from 'lucide-react';
import './styles.css';

const metrics = [
  { value: '01', label: '博士研究方向', detail: '介观动力学建模' },
  { value: '10+', label: '专业软件栈', detail: '计算模拟 / 数据分析 / 表征' },
  { value: '特等奖', label: '全国化工实验大赛', detail: '第七届全国赛' },
  { value: '5+', label: '核心课程基础', detail: '热力学 / 反应 / 分离 / 传递' },
];

const projects = [
  {
    eyebrow: 'Research Direction',
    title: '介观动力学建模与反应过程理解',
    description: '围绕复杂反应体系的多尺度行为，建立从物理化学机制到可解释动力学模型的研究叙事。',
    tags: ['Mesoscale Modeling', 'Reaction Engineering', 'Transport'],
    image: '/media/project-mesoscale-custom.png',
    alt: 'HDPA功能化催化剂介观动力学建模示意图',
    tone: 'project-cyan',
  },
  {
    eyebrow: 'AI for Chemistry',
    title: '机器学习辅助催化剂设计与性质预测',
    description: '结合材料描述符、计算化学数据与预测模型，探索催化剂结构、性能与反应表现之间的映射。',
    tags: ['Machine Learning', 'Catalyst Design', 'Property Prediction'],
    image: '/media/project-catalyst-custom.png',
    alt: '机器学习辅助催化剂性质预测模型流程图',
    tone: 'project-lime',
  },
  {
    eyebrow: 'Teaching',
    title: '化工核心课程与专业软件教学视频',
    description: '面向物理化学、化工热力学及 Aspen、VASP、Gaussian 等工具，沉淀可复用的学习内容。',
    tags: ['Bilibili', 'Course Notes', 'Software Tutorials'],
    images: ['/media/project-teaching-orbitals.png', '/media/project-teaching-structures.png'],
    alt: '化工课程与计算化学软件图示',
    tone: 'project-silver',
  },
];

const strengths = [
  {
    icon: FlaskConical,
    title: '化工学科底层能力',
    text: '系统学习物理化学、化工热力学、高等反应工程、高等分离工程与传递过程，能把问题放回工程与机理语境中判断。',
  },
  {
    icon: Cpu,
    title: '计算模拟与数据建模',
    text: '熟悉 VASP、Gaussian、Materials Studio、VESTA、Diamond 等工具，具备从结构构建、计算分析到模型表达的连续工作流意识。',
  },
  {
    icon: Workflow,
    title: '流程模拟与结果表达',
    text: '掌握 Aspen Plus、Origin、JADE、Avantage 等软件，能把过程模拟、实验数据和表征结果转化成清晰的图表与研究判断。',
  },
  {
    icon: BookOpenText,
    title: '教学型内容沉淀',
    text: '有 B 站教学视频创作经验，后续网站可扩展为课程笔记、软件教程、项目案例与视频资源的统一入口。',
  },
];

const software = [
  'Aspen Plus',
  'Origin',
  'VASP',
  'Materials Studio',
  'Blender',
  'Diamond',
  'Gaussian',
  'VESTA',
  'JADE',
  'Avantage',
  'COMSOL',
  'Matlab',
  'Pycharm',
];

function App() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Profile />
        <Projects />
        <Strengths />
        <Contact />
      </main>
    </>
  );
}

function SiteNav() {
  return (
    <nav className="site-nav" aria-label="主导航">
      <a className="brand" href="#home">
        <span className="brand-mark">
          <Atom size={20} strokeWidth={1.8} />
        </span>
        <span>CHEM</span>
      </a>
      <div className="nav-links">
        <a href="#profile">简介</a>
        <a href="#projects">项目</a>
        <a href="#strengths">优势</a>
        <a href="#contact">联系</a>
      </div>
      <a className="nav-contact" href="mailto:1455039056@qq.com">
        <Mail size={17} />
        联系我
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" aria-label="首页">
      <video
        className="hero-video"
        src="/media/hero-lab.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/hero-poster.svg"
      />
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-kicker">
            <Sparkles size={17} />
            Chemical Engineering · Modeling · Catalyst Design
          </div>
          <h1>用建模连接化工机理、数据与催化剂设计</h1>
          <p>
            化学工程与技术专业博一在读，研究兴趣聚焦介观动力学建模、机器学习辅助建模，以及催化剂设计与性质预测。
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#projects">
              查看精选项目
              <ArrowUpRight size={18} />
            </a>
            <a className="ghost-btn" href="#profile">
              <Play size={17} />
              了解我的研究
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="研究关键词">
          <span>Mesoscale Dynamics</span>
          <span>Machine Learning</span>
          <span>Catalyst Properties</span>
          <span>Process Simulation</span>
        </div>
      </div>
      <div className="scroll-cue">
        <span>Scroll</span>
        <ChevronRight size={18} />
      </div>
    </section>
  );
}

function Profile() {
  return (
    <section className="section profile-section" id="profile">
      <div className="section-shell profile-grid">
        <div className="portrait-frame">
          <div className="portrait-placeholder">
            <GraduationCap size={52} />
            <span>Portrait</span>
          </div>
        </div>

        <div className="profile-content">
          <p className="section-label">Profile</p>
          <h2>化工背景、计算建模与教学表达之间的交叉型研究者</h2>
          <p className="lead">
            我目前为化学工程与技术专业博士一年级学生，关注如何把化工核心理论、计算模拟与机器学习方法结合起来，用于复杂反应体系理解、催化剂设计和性质预测。曾获得第七届全国化工实验大赛全国特等奖，并持续将课程学习、专业软件使用经验和研究方法整理成教学内容。
          </p>
          <div className="contact-row">
            <span>
              <Mail size={17} />
              1455039056@qq.com
            </span>
            <span>
              <MapPin size={17} />
              Chemical Engineering PhD Candidate
            </span>
          </div>
          <div className="metrics-grid">
            {metrics.map((item) => (
              <article className="metric-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <p className="section-label">Selected Projects</p>
            <h2>精选项目与内容方向</h2>
          </div>
          <p>
            当前先以研究主题和教学内容作为项目入口，后续可替换为论文图、模拟结果、课程封面或软件教学截图。
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.title}>
              <div className="project-visual">
                {project.images ? (
                  <div className="project-image-pair" aria-label={project.alt}>
                    {project.images.map((image) => (
                      <img src={image} alt="" key={image} />
                    ))}
                  </div>
                ) : (
                  <img src={project.image} alt={project.alt} />
                )}
              </div>
              <div className="project-content">
                <span>{project.eyebrow}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="section strengths-section" id="strengths">
      <div className="section-shell">
        <div className="section-heading compact">
          <div>
            <p className="section-label">Capabilities</p>
            <h2>个人优势</h2>
          </div>
        </div>
        <div className="strength-grid">
          {strengths.map(({ icon: Icon, title, text }) => (
            <article className="strength-card" key={title}>
              <div className="icon-box">
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="software-strip" aria-label="专业软件">
          {software.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-shell">
        <p className="section-label">Contact</p>
        <h2>欢迎交流化工建模、催化剂设计、课程学习与专业软件教学</h2>
        <p>
          可通过邮箱或 GitHub 联系我。后续这里还可以继续接入 B 站主页、Google Scholar、个人简历下载，以及视频课程入口。
        </p>
        <div className="contact-actions">
          <a className="primary-btn dark" href="mailto:1455039056@qq.com">
            <Mail size={18} />
            发送邮件
          </a>
          <a
            className="ghost-btn light"
            href="https://github.com/Xian-Ding-Ding"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="github-icon" viewBox="0 0 98 96" aria-hidden="true">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M48.9 0C21.9 0 0 21.9 0 48.9c0 21.6 14 39.9 33.4 46.4 2.4.4 3.3-1.1 3.3-2.4 0-1.2 0-4.2-.1-8.3-13.6 3-16.5-6.5-16.5-6.5-2.2-5.6-5.4-7.1-5.4-7.1-4.4-3 .3-2.9.3-2.9 4.9.3 7.4 5 7.4 5 4.3 7.4 11.3 5.3 14 4 .4-3.1 1.7-5.3 3.1-6.5-10.8-1.2-22.2-5.4-22.2-24.2 0-5.3 1.9-9.7 5-13.1-.5-1.2-2.2-6.2.5-12.9 0 0 4.1-1.3 13.4 5 3.9-1.1 8.1-1.6 12.3-1.6s8.4.6 12.3 1.6c9.3-6.3 13.4-5 13.4-5 2.7 6.7 1 11.7.5 12.9 3.1 3.4 5 7.8 5 13.1 0 18.8-11.4 23-22.3 24.2 1.8 1.5 3.3 4.5 3.3 9.1 0 6.5-.1 11.8-.1 13.4 0 1.3.9 2.8 3.4 2.4C84 88.8 98 70.5 98 48.9 97.8 21.9 75.9 0 48.9 0Z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
          <a className="ghost-btn light" href="#home">
            回到首页
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;

createRoot(document.getElementById('root')).render(<App />);
