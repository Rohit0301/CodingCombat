# Generated by Django 3.1.4 on 2021-03-26 06:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Algorithms',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Algorithm_Name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='AlgorithmsQuestion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Algoritm_Question_Title', models.CharField(max_length=50)),
                ('Algorithm_Question_Link', models.URLField()),
                ('Algorithm_Question_Difficulty', models.IntegerField()),
                ('Algorithm_Question_Editorial', models.URLField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='AlgorithmsVideos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Algorithm_Video_Title', models.CharField(max_length=150)),
                ('Algorithm_Video_URL', models.URLField()),
                ('Algorithms_Video_Image', models.ImageField(upload_to='static/')),
                ('Algorithm_Name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Algorithms.algorithms')),
            ],
        ),
        migrations.CreateModel(
            name='AlgorithmsBlogs',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Algorithm_Blog_Title', models.CharField(max_length=150)),
                ('Algorithm_Blog_URL', models.URLField()),
                ('Algorithm_Name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Algorithms.algorithms')),
            ],
        ),
    ]
