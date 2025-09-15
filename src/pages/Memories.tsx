import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { memories } from '../data/memories';
import { Heart, MessageCircle, Share, Plus, Filter, Calendar, Camera } from 'lucide-react';

export const Memories: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [likedMemories, setLikedMemories] = useState<string[]>([]);

  const handleLike = (memoryId: string) => {
    if (likedMemories.includes(memoryId)) {
      setLikedMemories(prev => prev.filter(id => id !== memoryId));
    } else {
      setLikedMemories(prev => [...prev, memoryId]);
    }
  };

  const filteredMemories = memories.filter(memory => 
    filter === 'all' || memory.category === filter
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'graduation':
        return 'bg-blue-100 text-blue-800';
      case 'event':
        return 'bg-green-100 text-green-800';
      case 'achievement':
        return 'bg-orange-100 text-orange-800';
      case 'reunion':
        return 'bg-purple-100 text-purple-800';
      case 'campus':
        return 'bg-teal-100 text-teal-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const categories = [
    { value: 'all', label: 'All Memories', count: memories.length },
    { value: 'graduation', label: 'Graduation', count: memories.filter(m => m.category === 'graduation').length },
    { value: 'achievement', label: 'Achievements', count: memories.filter(m => m.category === 'achievement').length },
    { value: 'reunion', label: 'Reunions', count: memories.filter(m => m.category === 'reunion').length },
    { value: 'event', label: 'Events', count: memories.filter(m => m.category === 'event').length },
    { value: 'campus', label: 'Campus Life', count: memories.filter(m => m.category === 'campus').length }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Memories Gallery</h1>
          <p className="text-gray-600">Share and relive your university memories</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Share Memory
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Camera className="w-12 h-12 text-blue-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">{memories.length}</h3>
            <p className="text-sm text-gray-600">Total Memories</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              {memories.reduce((sum, memory) => sum + memory.likes, 0)}
            </h3>
            <p className="text-sm text-gray-600">Total Likes</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              {memories.reduce((sum, memory) => sum + memory.comments, 0)}
            </h3>
            <p className="text-sm text-gray-600">Total Comments</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Filter Memories</h3>
            <Filter className="w-5 h-5 text-gray-400" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filter === category.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMemories.map((memory) => {
          const isLiked = likedMemories.includes(memory.id);
          const currentLikes = memory.likes + (isLiked ? 1 : 0);
          
          return (
            <Card key={memory.id} hover>
              <div className="aspect-video w-full overflow-hidden rounded-t-2xl">
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(memory.category)}`}>
                    {memory.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(memory.date).toLocaleDateString()}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{memory.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{memory.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={memory.authorAvatar} 
                      alt={memory.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{memory.author}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleLike(memory.id)}
                      className={`flex items-center space-x-1 text-sm transition-colors ${
                        isLiked ? 'text-red-600' : 'text-gray-500 hover:text-red-600'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                      <span>{currentLikes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span>{memory.comments}</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-green-600 transition-colors">
                    <Share className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredMemories.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No memories found</h3>
            <p className="text-gray-500 mb-4">
              {filter === 'all' 
                ? 'No memories have been shared yet.' 
                : `No memories found in the ${categories.find(c => c.value === filter)?.label.toLowerCase()} category.`}
            </p>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Share Your First Memory
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};