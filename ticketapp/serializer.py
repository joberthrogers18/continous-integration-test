from rest_framework import serializers

from django.contrib.auth.models import User
from ticket.models import Ticket, Category

# Serializer define the api representation
class UserSerializer (serializers.Serializer):
  id = serializers.IntegerField()
  username = serializers.CharField(max_length=200)
  password = serializers.CharField(max_length=100, style={"input_type": "password"})
  is_staff = serializers.BooleanField(default=False)

  def create(self, validated_data):

    return User.objects.create(**validated_data)

  def update(self, instance, validated_data):

    instance.username = validated_data.get('username', instance.username)
    instance.password = validated_data.get('password', instance.password)
    instance.is_staff = validated_data.get('is_staff', instance.is_staff)
    instance.save()
    return instance

  class Meta:
    model = User
    fields = ('id','username', 'password', 'is_staff')

class TicketSerializer (serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Ticket
    fields = ('id', 'title', 'ticket_id', 'user', 'content', 'category', 'created', 'modified')

class CategorySerializer (serializers.ModelSerializer):
  class Meta:
    model = Category
    fields = ('name', 'slug')