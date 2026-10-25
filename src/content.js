export const site = {
  name: '清华大学学生未来空间协会',
  englishName: 'Tsinghua Student Space Lab',
  email: 'daisq24@mails.tsinghua.edu.cn',
  github: 'https://github.com/daisq24/tsinghua-space-lab',
  lab: 'https://sfes-lab.vercel.app/',
}

export const dailyDigest = {
  date: '2026.10.25',
  title: '每日行业讯息',
  english: 'DAILY SIGNALS',
  note: '具身智能 · 机器人 · 空间技术',
}

const embodiedNews = [
  {
    id: '20261025-01',
    type: '年度论坛 · 活动议程',
    title: 'Physical AI 开启 AI 下一站',
    summary: '探月年度具身论坛正式公布活动议程，重磅嘉宾齐聚，共同讨论具身智能的技术前沿与下一步发展。',
    details: ['年度重磅具身论坛', '聚焦 Physical AI 与具身智能前沿'],
    links: [],
  },
  {
    id: '20261025-02',
    type: '开发者活动 · 1024 程序员节',
    title: '具身智能开发者交流日：与世界交互',
    summary: '融科资讯中心与智元 AIMA 开发者社区联合发起，聚焦具身智能基础设施、大模型协同，以及从 Demo 到落地的产业实践。',
    details: [
      '智元 AIMA、MiniMax、辉羲智能技术分享与产业圆桌',
      '现场发布需求、认领资源，匹配合作伙伴',
      '展台互动、集章与披萨游园',
      '10 月 24 日 15:00–19:00 · 融科资讯中心',
      '面向具身智能相关行业开发者，审核制报名',
    ],
    links: [],
  },
  {
    id: '20261025-03',
    type: 'Demo 招募 · 机器人嘉年华',
    title: '你的机器人，有什么新花样？',
    summary: '面向独立开发者、初创团队与高校实验室招募机器人 Demo。打牌、投篮、家务实操或实验室前沿新能力，都可以登台亮相。',
    details: [
      '11 月 13 日 · 限量 35 个 Demo 展演席位',
      '实体互动展位 + 主舞台路演，直面投资人与媒体',
      '10 万奖金池，外地团队最高 3000 元差旅补贴',
      '10 月 31 日报名截止',
    ],
    links: [
      { label: '查看招募原文', url: 'https://mp.weixin.qq.com/s/yxAGCPtZy9qVl6TkWqToVg' },
      { label: '填写报名表', url: 'https://bcnmv8nkum64.feishu.cn/share/base/form/shrcnDdMLq1CwdEeKUfZO6NTdne' },
    ],
  },
]

const spatialSocietyArticles = [
  {
    id: '01',
    type: '观点文章 · 中英双语',
    title: '缄默的空间会梦见机器人吗？',
    english: 'Does Silent Space Dream of Robots?',
    summary: '从环境心理学、具身认知与文化记忆出发，讨论机器感知如何理解建成环境，以及情感、文化与人文维度为何应进入 AGI 的视野。',
    year: '2026',
    url: 'https://sfes-lab.vercel.app/01-%E7%A9%BA%E9%97%B4%E7%9A%84%E6%B2%89%E9%BB%98%E8%AF%AD%E8%A8%80_%E5%8F%8C%E8%AF%AD%E7%89%88.html',
  },
  {
    id: '02',
    type: '空间的政治经济学 · 图文',
    title: '废墟经济学：注意力资本如何清空实体空间',
    english: 'The Economics of Ruins',
    summary: '从圣何塞、伦敦到中国与全球城市，追问注意力经济、平台资本与城市更新如何改变公共空间、社区和集体记忆。',
    year: '2025',
    url: 'https://sfes-lab.vercel.app/02-%E5%BA%9F%E5%A2%9F%E7%BB%8F%E6%B5%8E%E5%AD%A6_%E5%9B%BE%E6%96%87%E7%89%88_final.html',
  },
  {
    id: '03',
    type: '世界模型 · 长篇思想实验',
    title: '一次思想实验：从《看不见的城市》到苏州',
    english: 'A Thought Experiment in Five Questions',
    summary: '沿五个问题穿行于卡尔维诺、世界模型、AI 的地理学与苏州园林，寻找表征、城市和具身智能之间的新连接。',
    year: '2026',
    url: 'https://sfes-lab.vercel.app/03-%E7%9C%8B%E4%B8%8D%E8%A7%81%E7%9A%84%E5%9F%8E%E5%B8%82_%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B.html',
  },
  {
    id: '04',
    type: '技术 · 政治 · 审美 · 一夜长谈',
    title: '阿尔忒弥斯计划实施：技术、政治与审美',
    english: 'The Artemis Implementation',
    summary: '十五章夜间对话，从硅谷技术加速主义与太空政治，一路谈到附近、公共空间和月球园林，保留思考发生的轨迹。',
    year: '2026',
    url: 'https://sfes-lab.vercel.app/04-%E9%98%BF%E5%B0%94%E5%BF%92%E5%BC%A5%E6%96%AF_%E6%8A%80%E6%9C%AF%E6%94%BF%E6%B2%BB%E5%AE%A1%E7%BE%8E.html',
  },
]

const column = (title, english, topics, extra = {}) => ({ title, english, topics, ...extra })

export const groups = [
  {
    id: '01',
    short: '头号玩家组',
    title: '空间智能与具身感知',
    english: 'Spatial Intelligence & Embodiment',
    question: '空间如何被机器理解、被身体感知、被技术增强？',
    description: '技术 + 体验。连接机器侧的空间智能与人类侧的具身感知，在算法、身体与环境的交汇处创造新的体验。',
    image: 'vr-garden.webp',
    color: '#7be8ed',
    defaultColumn: '空间机器人',
    columns: [
      column('空间智能', 'SPATIAL INTELLIGENCE', '空间认知与推理 / GIS / 空间数据科学'),
      column('混合空间', 'MIXED REALITY', 'VR / AR / XR / 混合空间'),
      column('具身感知', 'EMBODIED PERCEPTION', '具身交互与体验设计 / 人因工程 / 空间感知', { kind: 'news', items: embodiedNews }),
      column('空间机器人', 'SPATIAL ROBOTICS', '空间机器人 / 具身智能 / 空间图形学', { kind: 'news', items: embodiedNews }),
      column('多模态理解', 'MULTIMODAL UNDERSTANDING', '第一视角数据 / 多模态理解'),
      column('神经空间', 'NEURAL SPACE', '脑机接口 / 计算神经科学'),
    ],
  },
  {
    id: '02',
    short: '明日世界组',
    title: '智慧城市与空间社会',
    english: 'Smart Cities & Society',
    question: '空间如何被社会生产、被文化叙事、被规划和治理？',
    description: '社会 + 设计 + 治理。以技术与人文共同回应城市空间议题，从城市更新、空间数据到公共生活与文化记忆。',
    image: 'node-pine.webp',
    color: '#aaa5ff',
    defaultColumn: '空间社会',
    columns: [
      column('智慧城市', 'SMART CITIES', '智慧城市 / 城市更新 / 智慧交通 / 智慧文旅'),
      column('空间数据', 'SPATIAL DATA', '地理空间信息工程 / GIS / 空间数据科学'),
      column('城市治理', 'URBAN GOVERNANCE', '国土空间规划与治理 / 城市形态'),
      column('公共空间', 'PUBLIC SPACE', '可持续城市设计 / 社区营造 / 公共空间设计'),
      column('空间社会', 'SPACE & SOCIETY', '空间经济学 / 区域研究 / 空间社会学', { kind: 'articles', items: spatialSocietyArticles }),
      column('城市文化', 'URBAN CULTURE', '城市文化 / 空间叙事 / 文学空间'),
      column('低空专栏', 'LOW-ALTITUDE ECONOMY', '低空经济 / 民用航空 / 行业政策与标准', {
        kind: 'news',
        items: [{
          id: '20261025-low-altitude-01',
          type: '政策与标准 · 公开征求意见',
          title: '《低空民用航空统计指标分类》（征求意见稿）公开征求意见',
          summary: '中国民航科学技术研究院牵头起草，拟建立涵盖 7 大类、115 项指标的低空民用航空统计分类代码体系，覆盖航空器、应用场景、基础设施、空域资源、运营主体、从业人员与运行安全。',
          details: [
            '7 大类、115 项统计指标',
            '仅有人驾驶相关指标 65 个，仅无人驾驶相关指标 38 个',
            '采用线分类法与分层次编码，预留与民航行业及国家统计标准衔接的接口',
          ],
          links: [{ label: '阅读完整消息', url: 'https://mp.weixin.qq.com/s/LlJZ-dq7l8X9QlPxIeNnPA' }],
        }],
      }),
    ],
  },
  {
    id: '03',
    short: '星际穿越组',
    title: '深空探索与地外空间',
    english: 'Space Exploration',
    question: '人类如何向地球之外拓展空间？',
    description: '拓展 + 工程。面向深空探索、地外建造与星际旅行，研究新的栖息环境，也重新审视人类与地球的关系。',
    image: 'node-moongate.webp',
    color: '#c0a7ff',
    defaultColumn: '地外建造',
    columns: [
      column('地外建造', 'OFF-EARTH HABITATS', '太空城市 / 外星建筑 / 空间站设计'),
      column('深空探索', 'DEEP SPACE', '深空探索 / 科学卫星 / 星际旅行 / 空间感知'),
      column('空天推进', 'PROPULSION', '空天动力与推进 / 空间科学与技术'),
      column('航天人因', 'HUMAN FACTORS', '航天人因 / 神经工程 / 空间结构动力学'),
    ],
  },
]
