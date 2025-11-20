import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ExternalLink, BookOpen, User } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Home() {
  const { t } = useTranslation()

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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="container mx-auto max-w-4xl">
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
          {/* Islam Project */}
          <motion.div variants={item}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  {t('home.projects.islam.title')}
                </CardTitle>
                <CardDescription>
                  {t('home.projects.islam.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-md bg-muted flex items-center justify-center mb-4">
                  <BookOpen className="h-12 w-12 text-muted-foreground/50" />
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a
                    href="https://islam.ryqo.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Portfolio Project */}
          <motion.div variants={item}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-6 w-6 text-primary" />
                  {t('home.projects.portfolio.title')}
                </CardTitle>
                <CardDescription>
                  {t('home.projects.portfolio.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-md bg-muted flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-muted-foreground/50" />
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a
                    href="https://malik.ryqo.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
