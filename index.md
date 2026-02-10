---
layout: default
title: Safal Thapaliya
lang: en
permalink: /
---

![Profile Image](/assets/img/profile.webp){: .profile-img }

# Safal Thapaliya  
[Email](mailto:safalthapaliya@gmail.com) | [Google Scholar](https://scholar.google.com/citations?user=0yl8rVYAAAAJ) | [LinkedIn](https://www.linkedin.com/in/thapaliya19/) | [GitHub](https://github.com/thapaliya19) | [CV](assets/pdf/safal_cv.pdf)

---
Hello There! I’m Safal Thapaliya, a second-year PhD student in Computer Science and Engineering at the School of Computing, [University of Connecticut](https://uconn.edu/). I am a member of the [MINDS Lab](https://chuxuzhang.github.io/Lab/lab_index.html), advised by [Prof. Chuxu Zhang](https://chuxuzhang.github.io/).

My research interests center on large language models (LLMs) and their applications in graph learning and healthcare, with an emphasis on resource-efficient modeling and AI-for-healthcare systems. My current work focuses on trustworthy graph learning, particularly leveraging LLMs to generate semantic-rich node features and improve the robustness of graph neural networks (GNNs) under label noise. I also fine-tune open-source LLMs using LoRA/QLoRA (e.g., via Hugging Face, LLaMA-Factory, and vLLM) to strengthen text representations for downstream graph tasks.

Prior to joining UConn, I earned my B.E. in Computer Engineering from [IOE, Pulchowk Campus](http://pcampus.edu.np/) (2022). 
From 2022 to 2024, I worked as a Research Assistant at the [Nepal Applied Mathematics and Informatics Institute for research (NAAMII)](https://naamii.org.np/), supervised by [Dr. Bishesh Khanal](https://bishesh.github.io/). 
My work there spanned vision-language models (VLMs), medical image segmentation, and self-supervised learning.
I also developed research prototypes and deployment-ready pipelines for healthcare AI, including AI-assisted smartphone microscopy (in collaboration with [KIAS](https://kias.org.np/)), CT-based lower-limb angle measurement for corrective osteotomy (in collaboration with [Dr. Taman Upadhaya](https://www.linkedin.com/in/tamanupadhaya/)), and a real-time public discourse analysis system.

In addition, I was a founding member and developer of [Clamphook](https://clamphook.com/), a Nepal-based online exam preparation platform, where I designed the system architecture and led backend development and deployment.

---

## Publications
\* indicates equal contribution

{% for pub in site.data.publications %}
<div class="pub-entry">
  <div class="pub-title"><a href="{{ pub.link }}"> <strong>{{ pub.title }}</strong> </a></div>
  <div class="pub-authors">{{ pub.authors | markdownify}} ({{ pub.year }})</div>
  <div class="pub-venue"><i>{{ pub.venue }}</i></div>
  {% if pub.note %}
  <div class="pub-note">{{ pub.note }}</div>
  {% endif %}
  <div class="pub-links">
    {% if pub.pdf %}<a href="{{ pub.pdf }}">PDF</a>{% endif %}
    {% if pub.code %}<a href="{{ pub.code }}">Code</a>{% endif %}
  </div>
</div>
{% endfor %}

---
For a complete list of publications, see my [google scholar](https://scholar.google.com/citations?user=0yl8rVYAAAAJ).

---

## Projects

{% for project in site.data.projects %}
<div class="pub-entry">
  <div class="pub-title">
    {% if project.link %}
      <a href="{{ project.link }}"><strong>{{ project.title }}</strong></a>
    {% else %}
      <strong>{{ project.title }}</strong>
    {% endif %}
  </div>
  <div class="pub-authors">{{ project.description | markdownify }}</div>
  {% if project.link and project.link_text %}
  <div class="pub-links"><a href="{{ project.link }}">{{ project.link_text }}</a></div>
  {% endif %}
</div>
{% endfor %}
