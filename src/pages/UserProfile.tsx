
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import UserLayout from '@/components/UserLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Bell, Shield, Key, FileCheck, Clock, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { UserProfile as UserProfileType } from '@/lib/supabase';

const UserProfile = () => {
  const { profile, updateProfile, isLoading } = useAuth();
  const [userData, setUserData] = useState<Partial<UserProfileType>>({
    name: '',
    email: '',
    role: '',
    company: '',
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (profile) {
      setUserData({
        name: profile.name,
        email: profile.email,
        role: profile.role,
        company: profile.company,
      });
    }
  }, [profile]);

  const handleSaveChanges = async () => {
    setIsSaving(true);
    try {
      await updateProfile({
        name: userData.name || '',
        role: userData.role || '',
        company: userData.company || '',
      });
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <UserLayout currentTab="profile">
        <div className="flex justify-center items-center p-12">
          <Loader2 className="h-8 w-8 text-contractBlue-400 animate-spin" />
        </div>
      </UserLayout>
    );
  }

  return (
    <UserLayout currentTab="profile">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="bg-muted/30 border border-white/10">
            <CardHeader className="text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src={profile?.avatar_url || "/placeholder.svg"} alt={profile?.name} />
                <AvatarFallback>{profile?.name?.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{profile?.name || 'User'}</CardTitle>
              <CardDescription>{profile?.role || 'User'} at {profile?.company || 'Company'}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Plan</span>
                <span className="bg-contractBlue-500/20 text-contractBlue-400 text-xs px-2 py-1 rounded-full">{profile?.plan}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Member Since</span>
                <span>{new Date(profile?.join_date || '').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Contracts Created</span>
                <span>{profile?.contracts_created}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Contracts Reviewed</span>
                <span>{profile?.contracts_reviewed}</span>
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
                  <Input 
                    id="name" 
                    value={userData.name || ''} 
                    onChange={e => setUserData({...userData, name: e.target.value})} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={userData.email || ''} 
                    disabled 
                    className="bg-muted/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input 
                    id="role" 
                    value={userData.role || ''} 
                    onChange={e => setUserData({...userData, role: e.target.value})} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company" 
                    value={userData.company || ''} 
                    onChange={e => setUserData({...userData, company: e.target.value})}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="bg-gradient-blue"
                onClick={handleSaveChanges}
                disabled={isSaving}
              >
                {isSaving ? (
                  <span className="flex items-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </span>
                ) : (
                  'Save Changes'
                )}
              </Button>
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
