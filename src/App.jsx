import { useEffect, useState } from 'react'
import { articles, gallery, groups, site } from './content.js'

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

function App() {
  const [activeGroup, setActiveGroup] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const group = groups[activeGroup]

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedImage])

  const closeMenu = () => setMenuOpen(false)

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
          <a href="#journal" onClick={closeMenu}>空间志</a>
          <a href="#projects" onClick={closeMenu}>项目</a>
          <a className="nav-join" href="#join" onClick={closeMenu}>加入我们 <Arrow diagonal /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-aurora" />
          <div className="hero-image-wrap">
            <img src={asset('hero-lunar-pavilion.webp')} alt="月光下的地外园林与穹顶建筑" className="hero-image" />
            <div className="hero-image-shade" />
            <span className="image-index">LUNAR GARDEN / 001</span>
          </div>
          <div className="hero-content page-shell">
            <p className="eyebrow reveal"><span /> EXPLORE · CREATE · CONNECT</p>
            <h1><span>清华大学学生</span>未来空间协会</h1>
            <p className="hero-english">{site.englishName}</p>
            <p className="hero-statement">玩转关于空间的一切<span>一个跨学科的专业组织</span></p>
            <div className="hero-actions">
              <a className="button button-primary" href="#groups">探索三个方向 <Arrow /></a>
              <a className="text-link" href="#journal">阅读空间志 <Arrow diagonal /></a>
            </div>
          </div>
          <div className="hero-footer page-shell">
            <span>从身体感知到城市社会，再到宏观宇宙</span>
            <div className="hero-stats">
              <span><b>03</b> 研究方向</span>
              <span><b>∞</b> 空间尺度</span>
              <span><b>01</b> 共同社区</span>
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
            <div className="section-heading">
              <div><div className="section-label"><span>01—03</span> RESEARCH / 研究方向</div><h2>三个入口，同一个宇宙</h2></div>
              <p>选择你好奇的尺度，从这里开始。</p>
            </div>
            <div className="group-tabs" role="tablist" aria-label="研究方向">
              {groups.map((item, index) => (
                <button key={item.id} role="tab" aria-selected={activeGroup === index} aria-controls="group-panel" className={activeGroup === index ? 'group-tab active' : 'group-tab'} onClick={() => setActiveGroup(index)}>
                  <span>{item.id}</span><b>{item.short}</b><small>{item.title}</small><Arrow diagonal />
                </button>
              ))}
            </div>
            <div className="group-panel" id="group-panel" role="tabpanel" key={group.id} style={{ '--group-color': group.color }}>
              <div className="group-visual">
                <img src={asset(group.image)} alt={`${group.short}主题视觉`} />
                <span>{group.english}</span>
              </div>
              <div className="group-detail">
                <p className="group-number">GROUP / {group.id}</p>
                <h3>{group.title}</h3>
                <p className="group-question">{group.question}</p>
                <p className="group-description">{group.description}</p>
                <div className="tag-list">{group.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {activeGroup === 1 && <a className="text-link" href="#journal">阅读本组已发布的四篇文章 <Arrow /></a>}
              </div>
            </div>
          </div>
        </section>

        <section className="journal section page-shell" id="journal">
          <div className="section-heading journal-heading">
            <div><div className="section-label"><span>04</span> JOURNAL / 空间志</div><h2>已刊行的思考</h2></div>
            <div className="journal-source"><span>明日世界组 · 智慧城市与空间社会</span><a href={site.lab} target="_blank" rel="noreferrer">来自 SFES LAB <Arrow diagonal /></a></div>
          </div>
          <div className="article-list">
            {articles.map((article) => (
              <a className="article-card" href={article.url} target="_blank" rel="noreferrer" key={article.id}>
                <span className="article-number">{article.id}</span>
                <div className="article-body">
                  <div className="article-meta"><span>{article.type}</span><span>{article.year}</span></div>
                  <h3>{article.title}</h3>
                  <p className="article-english">{article.english}</p>
                  <p className="article-summary">{article.summary}</p>
                </div>
                <span className="article-arrow"><Arrow diagonal /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="page-shell">
            <div className="section-heading">
              <div><div className="section-label"><span>05</span> PROJECT / 跨组项目</div><h2>月面园林</h2></div>
              <p>当地外建造遇见东方园林，<br />空间成为连接技术、身体与记忆的媒介。</p>
            </div>
            <div className="gallery-grid">
              {gallery.map((item, index) => (
                <button className={`gallery-item gallery-item-${index + 1}`} key={item.image} onClick={() => setSelectedImage(item)} aria-label={`放大查看${item.title}`}>
                  <img src={asset(item.image)} alt={item.title} loading="lazy" />
                  <span className="gallery-caption"><span><b>{item.title}</b><small>{item.note}</small></span><Arrow diagonal /></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="join section" id="join">
          <div className="join-orbit" />
          <div className="page-shell join-content">
            <div className="section-label"><span>06</span> JOIN US / 加入我们</div>
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

      {selectedImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedImage.title} onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="关闭图片">×</button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={asset(selectedImage.image)} alt={selectedImage.title} />
            <figcaption><b>{selectedImage.title}</b><span>{selectedImage.note}</span></figcaption>
          </figure>
        </div>
      )}
    </>
  )
}

export default App
