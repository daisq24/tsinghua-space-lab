import { useState } from 'react'
import { dailyDigest, groups, site } from './content.js'

const asset = (name) => `${import.meta.env.BASE_URL}images/${name}`

function Arrow({ diagonal = false }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={diagonal ? 'M5 19 19 5M8 5h11v11' : 'M4 12h15m-6-6 6 6-6 6'} />
    </svg>
  )
}

function OrbitMark() {
  return (
    <svg className="orbit-mark" viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="12" />
      <ellipse cx="24" cy="24" rx="22" ry="7" transform="rotate(-28 24 24)" />
      <circle className="orbit-core" cx="24" cy="24" r="2.5" />
    </svg>
  )
}

function NewsList({ items }) {
  return (
    <div className="news-list">
      {items.map((item) => (
        <article className="news-card" key={item.id}>
          <div className="news-meta"><span>{item.type}</span><time>{dailyDigest.date}</time></div>
          <h4>{item.title}</h4>
          <p>{item.summary}</p>
          {item.details?.length > 0 && (
            <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          )}
          {item.links?.length > 0 && (
            <div className="news-links">
              {item.links.map((link) => <a href={link.url} target="_blank" rel="noreferrer" key={link.url}>{link.label} <Arrow diagonal /></a>)}
            </div>
          )}
        </article>
      ))}
    </div>
  )
}

function ArticleList({ items }) {
  return (
    <div className="article-list">
      {items.map((article) => (
        <a className="article-card" href={article.url} target="_blank" rel="noreferrer" key={article.id}>
          <span className="article-number">{article.id}</span>
          <div className="article-body">
            <div className="article-meta"><span>{article.type}</span><span>{article.year}</span></div>
            <h4>{article.title}</h4>
            <p className="article-english">{article.english}</p>
            <p className="article-summary">{article.summary}</p>
          </div>
          <span className="article-arrow"><Arrow diagonal /></span>
        </a>
      ))}
    </div>
  )
}

function App() {
  const [activeGroup, setActiveGroup] = useState(0)
  const [selectedColumns, setSelectedColumns] = useState(() => Object.fromEntries(groups.map((group, index) => [index, group.defaultColumn])))
  const [menuOpen, setMenuOpen] = useState(false)
  const group = groups[activeGroup]
  const activeColumnTitle = selectedColumns[activeGroup]
  const activeColumn = group.columns.find((column) => column.title === activeColumnTitle) || group.columns[0]

  const closeMenu = () => setMenuOpen(false)
  const openColumn = (groupIndex, columnTitle) => {
    setActiveGroup(groupIndex)
    setSelectedColumns((current) => ({ ...current, [groupIndex]: columnTitle }))
    closeMenu()
  }

  return (
    <>
      <a className="skip-link" href="#main">跳至主要内容</a>
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="返回首页">
          <OrbitMark />
          <span><b>SPACE LAB</b><small>TSINGHUA UNIVERSITY</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="打开导航菜单">
          <span /><span />
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="主导航">
          <a href="#about" onClick={closeMenu}>关于我们</a>
          <a href="#groups" onClick={closeMenu}>研究方向</a>
          <a href="#groups" onClick={() => openColumn(0, '空间机器人')}>每日讯息</a>
          <a href="#groups" onClick={() => openColumn(1, '空间社会')}>刊行思考</a>
          <a className="nav-join" href="#join" onClick={closeMenu}>加入我们 <Arrow diagonal /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-aurora" />
          <div className="hero-image-wrap">
            <img src={asset('hero-lunar-pavilion.webp')} alt="月光下的地外园林与穹顶建筑" className="hero-image" />
            <div className="hero-image-shade" />
            <span className="image-index">SPACE / UNLIMITED</span>
          </div>
          <span className="space-calligraphy" aria-hidden="true">空间无界</span>
          <div className="hero-content page-shell">
            <p className="eyebrow"><span /> EXPLORE · CREATE · CONNECT</p>
            <h1><span>清华大学学生</span>未来空间协会</h1>
            <p className="hero-english">{site.englishName}</p>
            <p className="hero-statement">玩转关于空间的一切<span>一个跨学科的专业组织</span></p>
            <div className="hero-actions">
              <a className="button button-primary" href="#groups">探索三个方向 <Arrow /></a>
              <a className="text-link" href="#groups" onClick={() => openColumn(0, '空间机器人')}>今日行业讯息 <Arrow diagonal /></a>
            </div>
          </div>
          <div className="hero-footer page-shell">
            <span>从身体感知到城市社会，再到宏观宇宙</span>
            <div className="hero-stats">
              <span><b>03</b> 研究方向</span>
              <span><b>17</b> 主题专栏</span>
              <span><b>∞</b> 空间尺度</span>
            </div>
          </div>
        </section>

        <section className="manifesto section page-shell" id="about">
          <div className="section-label"><span>00</span> MANIFESTO / 缘起</div>
          <div className="manifesto-grid">
            <h2>空间，不止一种尺度。<br />未来，不止一种答案。</h2>
            <div className="manifesto-copy">
              <p>连接建筑、土木、航天、人工智能、自动化、计算机与机械，也连接社会、设计与人文。</p>
              <p>我们相信，真正有趣的问题往往发生在学科之间。从一个身体如何感知世界，到一座城市如何承载生活，再到人类如何在地球之外建造家园——在这里，让不同尺度的空间相遇。</p>
              <div className="discipline-line">ARCHITECTURE × AI × AEROSPACE × SOCIETY</div>
            </div>
          </div>
        </section>

        <section className="groups-section section" id="groups">
          <div className="page-shell">
            <div className="group-tabs" role="tablist" aria-label="研究方向">
              {groups.map((item, index) => (
                <button key={item.id} role="tab" aria-selected={activeGroup === index} aria-controls="group-panel" className={activeGroup === index ? 'group-tab active' : 'group-tab'} onClick={() => setActiveGroup(index)}>
                  <span>{item.id}</span><b>{item.short}</b><small>{item.title}</small><Arrow diagonal />
                </button>
              ))}
            </div>
            <div className="group-panel" id="group-panel" role="tabpanel" style={{ '--group-color': group.color }}>
              <div className="group-visual">
                <img src={asset(group.image)} alt={`${group.short}主题视觉`} />
                <span>{group.english}</span>
              </div>
              <div className="group-detail">
                <p className="group-number">GROUP / {group.id}</p>
                <h3>{group.title}</h3>
                <p className="group-question">{group.question}</p>
                <p className="group-description">{group.description}</p>
                <div className="column-tabs" role="tablist" aria-label={`${group.short}专栏`}>
                  {group.columns.map((column, index) => (
                    <button key={column.title} role="tab" aria-selected={activeColumn.title === column.title} aria-controls="column-panel" className={activeColumn.title === column.title ? 'column-tab active' : 'column-tab'} onClick={() => setSelectedColumns((current) => ({ ...current, [activeGroup]: column.title }))}>
                      <span>{String(index + 1).padStart(2, '0')}</span>{column.title}
                    </button>
                  ))}
                </div>
              </div>
              <div className="column-panel" id="column-panel" role="tabpanel" key={`${group.id}-${activeColumn.title}`}>
                <div className="column-header">
                  <div>
                    <p>{group.short} / {activeColumn.english}</p>
                    <h3>{activeColumn.title}{!activeColumn.title.endsWith('专栏') && <span>专栏</span>}</h3>
                  </div>
                  <span className="column-topics">{activeColumn.topics}</span>
                </div>
                {activeColumn.kind === 'news' && (
                  <div className="digest-heading"><span>{dailyDigest.title} · {dailyDigest.date}</span><small>{dailyDigest.note}</small></div>
                )}
                {activeColumn.kind === 'articles' && (
                  <div className="digest-heading"><span>刊行思考 · ESSAYS & FIELD NOTES</span><a href={site.lab} target="_blank" rel="noreferrer">原文来自 SFES LAB <Arrow diagonal /></a></div>
                )}
                {activeColumn.kind === 'news' && <NewsList items={activeColumn.items} />}
                {activeColumn.kind === 'articles' && <ArticleList items={activeColumn.items} />}
                {!activeColumn.kind && (
                  <div className="empty-column">
                    <span className="empty-orbit"><OrbitMark /></span>
                    <h4>这个专栏，正在等待第一条讯号。</h4>
                    <p>内容持续筹备与更新。也欢迎你带来一篇文章、一个项目，或一条值得分享的行业消息。</p>
                    <a className="text-link" href={site.github} target="_blank" rel="noreferrer">通过 GitHub 提交内容 <Arrow diagonal /></a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="join section" id="join">
          <div className="join-orbit" />
          <div className="page-shell join-content">
            <div className="section-label"><span>04</span> JOIN US / 加入我们</div>
            <h2>带来一个问题，<br />一起打开新的空间。</h2>
            <p>无论你来自技术、设计、工程还是人文社科，<br />只要你对空间怀有好奇，这里就有你的坐标。</p>
            <div className="join-actions">
              <a className="button button-light" href={`mailto:${site.email}?subject=${encodeURIComponent('加入未来空间协会')}`}>联系我们 <Arrow diagonal /></a>
              <a className="button button-ghost" href={site.github} target="_blank" rel="noreferrer">在 GitHub 共同编辑 <Arrow diagonal /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer page-shell">
        <a className="brand" href="#top"><OrbitMark /><span><b>SPACE LAB</b><small>SPACE / UNLIMITED</small></span></a>
        <p>从城市，到虚拟世界，再到宇宙。</p>
        <span>© {new Date().getFullYear()} TSINGHUA STUDENT SPACE LAB</span>
      </footer>
    </>
  )
}

export default App
