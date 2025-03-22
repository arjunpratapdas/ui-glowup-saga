
import { motion } from 'framer-motion';
import { useState } from 'react';
import UserLayout from '@/components/UserLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Bell, Shield, Key, FileCheck, Clock } from 'lucide-react';

const UserProfile = () => {
  // Mock user data - in a real app, fetch this from your backend
  const [userData, setUserData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    role: 'Legal Counsel',
    company: 'Acme Corporation',
    plan: 'Premium',
    joinDate: 'January 15, 2023',
    contractsCreated: 37,
    contractsReviewed: 52,
  });

  return (
    <UserLayout currentTab="profile">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="bg-muted/30 border border-white/10">
            <CardHeader className="text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src="/placeholder.svg" alt={userData.name} />
                <AvatarFallback>{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{userData.name}</CardTitle>
              <CardDescription>{userData.role} at {userData.company}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Plan</span>
                <span className="bg-contractBlue-500/20 text-contractBlue-400 text-xs px-2 py-1 rounded-full">{userData.plan}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Member Since</span>
                <span>{userData.joinDate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Contracts Created</span>
                <span>{userData.contractsCreated}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Contracts Reviewed</span>
                <span>{userData.contractsReviewed}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Upgrade Plan</Button>
            </CardFooter>
          </Card>
        </div>
      
        <div className="lg:col-span-2 space-y-8">
          <Card className="bg-muted/30 border border-white/10">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={userData.name} onChange={e => setUserData({...userData, name: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={userData.email} onChange={e => setUserData({...userData, email: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" value={userData.role} onChange={e => setUserData({...userData, role: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" value={userData.company} onChange={e => setUserData({...userData, company: e.target.value})} />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-gradient-blue">Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card className="bg-muted/30 border border-white/10">
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Bell className="h-5 w-5 text-contractBlue-400" />
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates about your contracts</p>
                  </div>
                </div>
                <div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Shield className="h-5 w-5 text-contractBlue-400" />
                  <div>
                    <p className="font-medium">Security Settings</p>
                    <p className="text-sm text-muted-foreground">Manage your security preferences</p>
                  </div>
                </div>
                <div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Key className="h-5 w-5 text-contractBlue-400" />
                  <div>
                    <p className="font-medium">API Access</p>
                    <p className="text-sm text-muted-foreground">Manage API keys and access</p>
                  </div>
                </div>
                <div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserProfile;
