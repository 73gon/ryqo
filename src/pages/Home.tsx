import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ExternalLink, BookOpen, User, LayoutTemplate } from 'lucide-react'
import { useState, useEffect } from 'react'

import { Button } from '@/components/ui/button'
import SpotlightCard from '@/components/SpotlightCard'

export function Home() {
  const { t } = useTranslation()
  const [portfolioImageError, setPortfolioImageError] = useState(false)
  const [islamImageError, setIslamImageError] = useState(false)
  const [gamesImageError, setGamesImageError] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    }

    checkTheme()

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t('home.title')}
          </h1>
          <p className="text-xl text-muted-foreground">{t('home.subtitle')}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2"
        >
          {/* Portfolio */}
          <motion.div variants={item}>
            <SpotlightCard className="h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-2">
                  <User className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">
                    {t('home.projects.portfolio.title')}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {t('home.projects.portfolio.description')}
                </p>
                <div className="aspect-video rounded-md overflow-hidden mb-4 bg-muted/20 relative">
                  {!portfolioImageError ? (
                    <img
                      src={`https://api.microlink.io?url=${encodeURIComponent('https://malik.ryqo.ai')}&screenshot=true&meta=false&embed=screenshot.url${isDarkMode ? '&colorScheme=dark' : ''}`}
                      alt="malik portfolio preview"
                      className="w-full h-full object-cover"
                      onError={() => setPortfolioImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted/20 text-muted-foreground/50">
                      <LayoutTemplate className="h-12 w-12" />
                    </div>
                  )}
                </div>
                <Button asChild className="w-full mt-auto">
                  <a
                    href="https://malik.ryqo.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    visit website <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Islam */}
          <SpotlightCard className="h-full">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">
                  {t('home.projects.islam.title')}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {t('home.projects.islam.description')}
              </p>
              <div className="aspect-video rounded-md overflow-hidden mb-4 bg-muted/20 relative">
                {!islamImageError ? (
                  <img
                    src={`https://api.microlink.io?url=${encodeURIComponent('https://islam.ryqo.ai')}&screenshot=true&meta=false&embed=screenshot.url${isDarkMode ? '&colorScheme=dark' : ''}`}
                    alt="islam prophets preview"
                    className="w-full h-full object-cover"
                    onError={() => setIslamImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted/20 text-muted-foreground/50">
                    <LayoutTemplate className="h-12 w-12" />
                  </div>
                )}
              </div>
              <Button asChild className="w-full mt-auto">
                <a
                  href="https://islam.ryqo.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  visit website <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </SpotlightCard>

          {/* Games */}
          <motion.div variants={item}>
            <SpotlightCard className="h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-2">
                  <User className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">
                    {t('home.projects.games.title')}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {t('home.projects.games.description')}
                </p>
                <div className="aspect-video rounded-md overflow-hidden mb-4 bg-muted/20 relative">
                  {!gamesImageError ? (
                    <img
                      src={`https://api.microlink.io?url=${encodeURIComponent('https://games.ryqo.ai')}&screenshot=true&meta=false&embed=screenshot.url${isDarkMode ? '&colorScheme=dark' : ''}`}
                      alt="games preview"
                      className="w-full h-full object-cover"
                      onError={() => setGamesImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted/20 text-muted-foreground/50">
                      <LayoutTemplate className="h-12 w-12" />
                    </div>
                  )}
                </div>
                <Button asChild className="w-full mt-auto">
                  <a
                    href="https://games.ryqo.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    visit website <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
