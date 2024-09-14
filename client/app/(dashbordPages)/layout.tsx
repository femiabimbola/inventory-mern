import { DashboardWrapper } from "@/components/DashboardWrapper"

interface DashboardLayoutProps {
  children : React.ReactNode
}

const DashboardLayout = ({children}: DashboardLayoutProps) => {
  return (
    <div>
      <DashboardWrapper>
        {children}
      </DashboardWrapper>
    </div>
  )
}

export default DashboardLayout