# Generated by Django 3.1.4 on 2021-03-26 06:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Algorithms', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Algorithm',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Algorithm_Name', models.CharField(default=None, max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='AlgorithmsBlog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Algorithm_Blog_Title', models.CharField(default=None, max_length=150)),
                ('Algorithm_Blog_URL', models.URLField(default=None)),
                ('Algorithm_Name', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='Algorithms.algorithm')),
            ],
        ),
        migrations.CreateModel(
            name='AlgorithmsVideo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Algorithm_Video_Title', models.CharField(default=None, max_length=150)),
                ('Algorithm_Video_URL', models.URLField(default=None)),
                ('Algorithms_Video_Image', models.ImageField(default=None, upload_to='static/')),
                ('Algorithm_Name', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='Algorithms.algorithm')),
            ],
        ),
        migrations.RemoveField(
            model_name='algorithmsblogs',
            name='Algorithm_Name',
        ),
        migrations.RemoveField(
            model_name='algorithmsvideos',
            name='Algorithm_Name',
        ),
        migrations.AlterField(
            model_name='algorithmsquestion',
            name='Algorithm_Question_Difficulty',
            field=models.IntegerField(default=None),
        ),
        migrations.AlterField(
            model_name='algorithmsquestion',
            name='Algorithm_Question_Editorial',
            field=models.URLField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='algorithmsquestion',
            name='Algorithm_Question_Link',
            field=models.URLField(default=None),
        ),
        migrations.AlterField(
            model_name='algorithmsquestion',
            name='Algoritm_Question_Title',
            field=models.CharField(default=None, max_length=50),
        ),
        migrations.DeleteModel(
            name='Algorithms',
        ),
        migrations.DeleteModel(
            name='AlgorithmsBlogs',
        ),
        migrations.DeleteModel(
            name='AlgorithmsVideos',
        ),
        migrations.AddField(
            model_name='algorithmsquestion',
            name='Algorithm_Name',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='Algorithms.algorithm'),
        ),
    ]