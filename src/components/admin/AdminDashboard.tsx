import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  GraduationCap, 
  DollarSign, 
  Calendar,
  TrendingUp,
  UserPlus,
  BookOpen,
  CreditCard,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle,
  Settings
} from "lucide-react";

const AdminDashboard = () => {
  // Mock data
  const kpiData = {
    totalStudents: 342,
    activeClasses: 28,
    monthlyRevenue: 125000000, // VND
    occupancyRate: 85
  };

  const recentActivities = [
    { id: 1, action: "New student registration", student: "Nguyễn Minh An", time: "5 minutes ago", type: "success" },
    { id: 2, action: "Payment completed", student: "Trần Thị Bảo", time: "12 minutes ago", type: "info" },
    { id: 3, action: "Class attendance marked", class: "Math Grade 5A", time: "25 minutes ago", type: "success" },
    { id: 4, action: "Low allowance wallet", student: "Lê Văn Cường", time: "1 hour ago", type: "warning" }
  ];

  const upcomingClasses = [
    { id: 1, subject: "English Advanced", time: "14:00", students: 15, capacity: 20, teacher: "Ms. Sarah" },
    { id: 2, subject: "Math Olympiad", time: "15:30", students: 18, capacity: 18, teacher: "Mr. Tuấn" },
    { id: 3, subject: "Science Lab", time: "16:00", students: 12, capacity: 16, teacher: "Ms. Linh" }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { 
      style: 'currency', 
      currency: 'VND' 
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Brighway Admin Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">Manage your after-school center operations</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                System Online
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-l-primary shadow-soft hover:shadow-medium transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{kpiData.totalStudents}</div>
              <p className="text-xs text-success flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent shadow-soft hover:shadow-medium transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Classes</CardTitle>
              <GraduationCap className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{kpiData.activeClasses}</div>
              <p className="text-xs text-muted-foreground mt-1">Across all programs</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-success shadow-soft hover:shadow-medium transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{formatCurrency(kpiData.monthlyRevenue)}</div>
              <p className="text-xs text-success flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-warning shadow-soft hover:shadow-medium transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
              <Activity className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">{kpiData.occupancyRate}%</div>
              <p className="text-xs text-muted-foreground mt-1">Average across all classes</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-5 h-auto p-1">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="students" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Students
            </TabsTrigger>
            <TabsTrigger value="classes" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Classes
            </TabsTrigger>
            <TabsTrigger value="financial" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Financial
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activities */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Recent Activities
                  </CardTitle>
                  <CardDescription>Latest system activities and events</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className={`p-1 rounded-full ${
                        activity.type === 'success' ? 'bg-success/10' :
                        activity.type === 'warning' ? 'bg-warning/10' : 'bg-info/10'
                      }`}>
                        {activity.type === 'success' ? (
                          <CheckCircle className="h-3 w-3 text-success" />
                        ) : activity.type === 'warning' ? (
                          <AlertCircle className="h-3 w-3 text-warning" />
                        ) : (
                          <Activity className="h-3 w-3 text-info" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.student || activity.class} • {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Classes */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Today's Classes
                  </CardTitle>
                  <CardDescription>Classes scheduled for today</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingClasses.map((classItem) => (
                    <div key={classItem.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <p className="font-medium">{classItem.subject}</p>
                        <p className="text-sm text-muted-foreground">
                          {classItem.time} • {classItem.teacher}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <Badge variant={classItem.students === classItem.capacity ? "destructive" : "secondary"}>
                            {classItem.students}/{classItem.capacity}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {Math.round((classItem.students / classItem.capacity) * 100)}% full
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Student Management</span>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add Student
                  </Button>
                </CardTitle>
                <CardDescription>Manage student profiles, enrollments, and membership</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Student Management Module</h3>
                  <p className="text-muted-foreground">
                    This section would contain student listings, search functionality, and detailed management tools.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="classes" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Class & Program Management</span>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Create Class
                  </Button>
                </CardTitle>
                <CardDescription>Manage courses, schedules, and teacher assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <GraduationCap className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Class Management Module</h3>
                  <p className="text-muted-foreground">
                    This section would contain class scheduling, curriculum management, and teacher assignment tools.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financial" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Financial Management</span>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    <CreditCard className="h-4 w-4 mr-2" />
                    View Transactions
                  </Button>
                </CardTitle>
                <CardDescription>Monitor payments, wallets, and financial reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <DollarSign className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Financial Management Module</h3>
                  <p className="text-muted-foreground">
                    This section would contain wallet management, payment tracking, and financial analytics.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Analytics & Reports</CardTitle>
                <CardDescription>Generate detailed reports and view system analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <TrendingUp className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Reports & Analytics Module</h3>
                  <p className="text-muted-foreground">
                    This section would contain comprehensive reporting tools, charts, and export capabilities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;