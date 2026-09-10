(() => {
  const locales = {
    en: "EN",
    es: "ES",
    "zh-CN": "简中",
    "zh-TW": "繁中",
  };

  const copy = {
    "【页面标题占位】": { es: "【Título de la página】", "zh-CN": "【页面标题】", "zh-TW": "【頁面標題】" },
    "【主标题第一行】": { es: "【Primera línea del título】", "zh-CN": "【主标题第一行】", "zh-TW": "【主標題第一行】" },
    "【主标题第二行】": { es: "【Segunda línea del título】", "zh-CN": "【主标题第二行】", "zh-TW": "【主標題第二行】" },
    "【用一到两句话说明页面提供的核心价值，以及用户可以获得什么结果】": {
      es: "【Explica en una o dos frases el valor principal y el resultado que obtiene el usuario】",
      "zh-CN": "【用一到两句话说明页面提供的核心价值，以及用户可以获得什么结果】",
      "zh-TW": "【用一到兩句話說明頁面提供的核心價值，以及使用者可以獲得什麼結果】",
    },
    "【内容描述】": { es: "【Descripción del contenido】", "zh-CN": "【内容描述】", "zh-TW": "【內容描述】" },
    "【添加参考素材】": { es: "【Añadir referencias】", "zh-CN": "【添加参考素材】", "zh-TW": "【新增參考素材】" },
    "【模型选择】": { es: "【Selección de modelo】", "zh-CN": "【模型选择】", "zh-TW": "【模型選擇】" },
    "【比例设置】": { es: "【Configuración de formato】", "zh-CN": "【比例设置】", "zh-TW": "【比例設定】" },
    "【清晰度设置】": { es: "【Configuración de resolución】", "zh-CN": "【清晰度设置】", "zh-TW": "【清晰度設定】" },
    "【模型选项一】": { es: "【Opción de modelo uno】", "zh-CN": "【模型选项一】", "zh-TW": "【模型選項一】" },
    "【模型选项二】": { es: "【Opción de modelo dos】", "zh-CN": "【模型选项二】", "zh-TW": "【模型選項二】" },
    "【模型选项三】": { es: "【Opción de modelo tres】", "zh-CN": "【模型选项三】", "zh-TW": "【模型選項三】" },
    "【模型名称】": { es: "【Nombre del modelo】", "zh-CN": "【模型名称】", "zh-TW": "【模型名稱】" },
    "【标签】": { es: "【Etiqueta】", "zh-CN": "【标签】", "zh-TW": "【標籤】" },
    "【模型说明文字】": { es: "【Descripción del modelo】", "zh-CN": "【模型说明文字】", "zh-TW": "【模型說明文字】" },
    "【比例】": { es: "【Formato】", "zh-CN": "【比例】", "zh-TW": "【比例】" },
    "【比例一】": { es: "【Formato vertical】", "zh-CN": "【竖屏比例】", "zh-TW": "【直式比例】" },
    "【比例二】": { es: "【Formato horizontal】", "zh-CN": "【横屏比例】", "zh-TW": "【橫屏比例】" },
    "【清晰度】": { es: "【Resolución】", "zh-CN": "【清晰度】", "zh-TW": "【清晰度】" },
    "【清晰度一】": { es: "【Resolución uno】", "zh-CN": "【清晰度一】", "zh-TW": "【清晰度一】" },
    "【清晰度二】": { es: "【Resolución dos】", "zh-CN": "【清晰度二】", "zh-TW": "【清晰度二】" },
    "【清晰度三】": { es: "【Resolución tres】", "zh-CN": "【清晰度三】", "zh-TW": "【清晰度三】" },
    "【主按钮文字】": { es: "【Texto del botón principal】", "zh-CN": "【主按钮文字】", "zh-TW": "【主按鈕文字】" },
    "【广告电商效果展示】": { es: "【展示 de resultados de anuncios e-commerce】", "zh-CN": "【广告电商效果展示】", "zh-TW": "【廣告電商效果展示】" },
    "【跳转提示文字】": { es: "【Texto de navegación】", "zh-CN": "【跳转提示文字】", "zh-TW": "【跳轉提示文字】" },
    "【广告类型1】": { es: "【Tipo de anuncio 1】", "zh-CN": "【广告类型1】", "zh-TW": "【廣告類型1】" },
    "【广告类型2】": { es: "【Tipo de anuncio 2】", "zh-CN": "【广告类型2】", "zh-TW": "【廣告類型2】" },
    "【广告类型3】": { es: "【Tipo de anuncio 3】", "zh-CN": "【广告类型3】", "zh-TW": "【廣告類型3】" },
    "【广告类型4】": { es: "【Tipo de anuncio 4】", "zh-CN": "【广告类型4】", "zh-TW": "【廣告類型4】" },
    "【模块用途提示：这里用于展示产品广告视频、创意方向、使用场景或转化效果；后续替换真实文案和视频素材】": {
      es: "【Indica aquí el uso del módulo: vídeos publicitarios, conceptos creativos, casos de uso o resultados; sustituye después el texto y los vídeos】",
      "zh-CN": "【模块用途提示：这里用于展示产品广告视频、创意方向、使用场景或转化效果；后续替换真实文案和视频素材】",
      "zh-TW": "【模組用途提示：這裡用於展示產品廣告影片、創意方向、使用場景或轉化效果；之後替換真實文案和影片素材】",
    },
    "【展示内容走马灯】": { es: "【Carrusel de contenido】", "zh-CN": "【展示内容走马灯】", "zh-TW": "【展示內容走馬燈】" },
    "【视频素材占位】": { es: "【Marcador de vídeo】", "zh-CN": "【视频素材占位】", "zh-TW": "【影片素材佔位】" },
    "【竖屏视频素材占位】": { es: "【Marcador de vídeo vertical】", "zh-CN": "【竖屏视频素材占位】", "zh-TW": "【直式影片素材佔位】" },
    "【播放视频声音】": { es: "【Reproducir sonido del vídeo】", "zh-CN": "【播放视频声音】", "zh-TW": "【播放影片聲音】" },
    "【播放声音】": { es: "【Reproducir sonido】", "zh-CN": "【播放声音】", "zh-TW": "【播放聲音】" },
    "【功能宣传模块标题】": { es: "【Título del módulo de funciones】", "zh-CN": "【功能宣传模块标题】", "zh-TW": "【功能宣傳模組標題】" },
    "【功能宣传模块说明：这里概括产品能够提供的核心功能、使用价值或转化结果】": {
      es: "【Resume las funciones principales, el valor de uso o los resultados de conversión】",
      "zh-CN": "【功能宣传模块说明：这里概括产品能够提供的核心功能、使用价值或转化结果】",
      "zh-TW": "【功能宣傳模組說明：這裡概括產品能提供的核心功能、使用價值或轉化結果】",
    },
    "【功能标题1】": { es: "【Título de función 1】", "zh-CN": "【功能标题1】", "zh-TW": "【功能標題1】" },
    "【功能标题2】": { es: "【Título de función 2】", "zh-CN": "【功能标题2】", "zh-TW": "【功能標題2】" },
    "【功能标题3】": { es: "【Título de función 3】", "zh-CN": "【功能标题3】", "zh-TW": "【功能標題3】" },
    "【功能标题4】": { es: "【Título de función 4】", "zh-CN": "【功能标题4】", "zh-TW": "【功能標題4】" },
    "【功能标题5】": { es: "【Título de función 5】", "zh-CN": "【功能标题5】", "zh-TW": "【功能標題5】" },
    "【功能标题6】": { es: "【Título de función 6】", "zh-CN": "【功能标题6】", "zh-TW": "【功能標題6】" },
    "【功能说明占位：这里描述该功能如何帮助用户完成任务、解决问题或提升广告电商效果】": {
      es: "【Describe cómo esta función ayuda a completar tareas, resolver problemas o mejorar los resultados de anuncios e-commerce】",
      "zh-CN": "【功能说明占位：这里描述该功能如何帮助用户完成任务、解决问题或提升广告电商效果】",
      "zh-TW": "【功能說明佔位：這裡描述該功能如何幫助使用者完成任務、解決問題或提升廣告電商效果】",
    },
    "【功能视频素材占位】": { es: "【Marcador de vídeo de función】", "zh-CN": "【功能视频素材占位】", "zh-TW": "【功能影片素材佔位】" },
    "【播放功能视频声音】": { es: "【Reproducir sonido del vídeo de función】", "zh-CN": "【播放功能视频声音】", "zh-TW": "【播放功能影片聲音】" },
    "【评论内容走马灯】": { es: "【Carrusel de comentarios】", "zh-CN": "【评论内容走马灯】", "zh-TW": "【評論內容走馬燈】" },
    "【功能按钮文字】": { es: "【Texto del botón de función】", "zh-CN": "【功能按钮文字】", "zh-TW": "【功能按鈕文字】" },
    "Turn Product Ideas into Ad Videos in Three Steps": { es: "Convierte ideas de producto en vídeos publicitarios en tres pasos", "zh-CN": "三步把产品想法变成广告视频", "zh-TW": "三步把產品想法變成廣告影片" },
    "From product details to polished ad creative, turn your campaign idea into a ready-to-share video in three simple steps.": {
      es: "De los detalles del producto a una creatividad publicitaria pulida, convierte tu idea de campaña en un vídeo listo para compartir en tres pasos.",
      "zh-CN": "从产品信息到精致广告创意，用三个简单步骤把营销想法变成可以分享的视频。",
      "zh-TW": "從產品資訊到精緻廣告創意，用三個簡單步驟把行銷想法變成可以分享的影片。",
    },
    "Add Your Product": { es: "Añade tu producto", "zh-CN": "添加你的产品", "zh-TW": "加入你的產品" },
    "Shape the Ad Concept": { es: "Define el concepto del anuncio", "zh-CN": "完善广告概念", "zh-TW": "完善廣告概念" },
    "Review and Publish": { es: "Revisa y publica", "zh-CN": "检查并发布", "zh-TW": "檢查並發布" },
    "Upload product images or video references and describe the offer, audience, or visual direction you want to promote.": {
      es: "Sube imágenes o referencias de vídeo del producto y describe la oferta, la audiencia o la dirección visual que quieres promocionar.",
      "zh-CN": "上传产品图片或视频参考，并描述你想推广的优惠、受众或视觉方向。",
      "zh-TW": "上傳產品圖片或影片參考，並描述你想推廣的優惠、受眾或視覺方向。",
    },
    "Turn your inputs into a clear hook, script, shot plan, and visual style designed for your campaign.": {
      es: "Convierte tus aportes en un gancho, guion, plan de planos y estilo visual claros para tu campaña.",
      "zh-CN": "把你的输入整理成适合营销活动的清晰开场、脚本、镜头计划和视觉风格。",
      "zh-TW": "把你的輸入整理成適合行銷活動的清晰開場、腳本、鏡頭計畫和視覺風格。",
    },
    "Generate the video, refine the details, and export a polished ad ready for your storefront, social feed, or paid campaign.": {
      es: "Genera el vídeo, perfecciona los detalles y exporta un anuncio listo para tu tienda, feed social o campaña pagada.",
      "zh-CN": "生成视频、完善细节，并导出适合店铺、社交媒体或付费活动的精致广告。",
      "zh-TW": "生成影片、完善細節，並匯出適合店舖、社群媒體或付費活動的精緻廣告。",
    },
    "Multiple AI Models": { es: "Varios modelos de IA", "zh-CN": "多个 AI 模型", "zh-TW": "多個 AI 模型" },
    "Top AI Models Powering Wizstar’s Ad Creation": {
      es: "Los mejores modelos de IA que impulsan la creación de anuncios de Wizstar",
      "zh-CN": "驱动 Wizstar 广告创作的顶级 AI 模型",
      "zh-TW": "驅動 Wizstar 廣告創作的頂級 AI 模型",
    },
    "Top": { es: "Los mejores", "zh-CN": "顶级", "zh-TW": "頂級" },
    "Models": { es: "modelos", "zh-CN": "模型", "zh-TW": "模型" },
    "Powering": { es: "que impulsan", "zh-CN": "驱动", "zh-TW": "驅動" },
    "Wizstar’s": { es: "el", "zh-CN": "Wizstar", "zh-TW": "Wizstar" },
    "Ad": { es: "la creación", "zh-CN": "广告", "zh-TW": "廣告" },
    "Creation": { es: "", "zh-CN": "创作", "zh-TW": "創作" },
    "Explore Video Models": { es: "Explora los modelos de vídeo", "zh-CN": "探索视频模型", "zh-TW": "探索影片模型" },
    "Multiple AI Models": { es: "Varios modelos de IA", "zh-CN": "多个 AI 模型", "zh-TW": "多個 AI 模型" },
    "Wizstar brings four AI video models into one workflow, so you can match each brief with the kind of motion, continuity, and shot length it needs.": {
      es: "Wizstar reúne cuatro modelos de vídeo con IA en un solo flujo para elegir el movimiento, la continuidad y la duración adecuados para cada briefing.",
      "zh-CN": "Wizstar 将四个 AI 视频模型整合到一个工作流中，可根据每份需求匹配合适的运动、连续性和镜头时长。",
      "zh-TW": "Wizstar 將四個 AI 影片模型整合到一個工作流程中，可根據每份需求匹配合適的運動、連貫性和鏡頭時長。",
    },
    "Seedance 2.0": { es: "Seedance 2.0", "zh-CN": "Seedance 2.0", "zh-TW": "Seedance 2.0" },
    "Seedance 2.5": { es: "Seedance 2.5", "zh-CN": "Seedance 2.5", "zh-TW": "Seedance 2.5" },
    "MiniMax H3": { es: "MiniMax H3", "zh-CN": "MiniMax H3", "zh-TW": "MiniMax H3" },
    "Kling 3.0 Omni": { es: "Kling 3.0 Omni", "zh-CN": "Kling 3.0 Omni", "zh-TW": "Kling 3.0 Omni" },
    "Stable audiovisual storytelling": { es: "Narrativa audiovisual estable", "zh-CN": "稳定的视听叙事", "zh-TW": "穩定的視聽敘事" },
    "Choose it for connected scenes that need reliable visual continuity, synchronized sound, and a smooth narrative flow.": {
      es: "Elígelo para escenas conectadas que necesiten continuidad visual fiable, sonido sincronizado y un flujo narrativo fluido.",
      "zh-CN": "适合需要可靠视觉连续性、同步声音和流畅叙事的连续场景。",
      "zh-TW": "適合需要可靠視覺連貫性、同步聲音和流暢敘事的連續場景。",
    },
    "Longer multi-reference shots": { es: "Planos largos con varias referencias", "zh-CN": "更长的多参考镜头", "zh-TW": "更長的多參考鏡頭" },
    "Choose it for a single shot up to 30 seconds when several visual references need to stay connected in one directed sequence.": {
      es: "Elígelo para un plano de hasta 30 segundos cuando varias referencias visuales deban mantenerse conectadas en una secuencia dirigida.",
      "zh-CN": "当多个视觉参考需要在一个有明确指导的连续镜头中保持关联时，适合最长 30 秒的单镜头。",
      "zh-TW": "當多個視覺參考需要在一個有明確指導的連續鏡頭中保持關聯時，適合最長 30 秒的單鏡頭。",
    },
    "High-resolution cinematic control": { es: "Control cinematográfico de alta resolución", "zh-CN": "高分辨率电影感控制", "zh-TW": "高解析度電影感控制" },
    "Choose it for visually rich scenes that benefit from expressive character motion, detailed subjects, and polished high-resolution output.": {
      es: "Elígelo para escenas visualmente ricas que necesiten movimientos expresivos, sujetos detallados y una salida pulida de alta resolución.",
      "zh-CN": "适合需要丰富画面、人物表现力、细节主体和高分辨率输出的场景。",
      "zh-TW": "適合需要豐富畫面、人物表現力、細節主體和高解析度輸出的場景。",
    },
    "Realistic motion and physics": { es: "Movimiento y física realistas", "zh-CN": "真实运动和物理效果", "zh-TW": "真實運動和物理效果" },
    "Choose it to bring product shots, characters, and image references to life with grounded movement and believable physical detail.": {
      es: "Elígelo para dar vida a productos, personajes y referencias de imagen con movimiento natural y detalles físicos creíbles.",
      "zh-CN": "适合让产品镜头、人物和图片参考呈现自然运动与可信的物理细节。",
      "zh-TW": "適合讓產品鏡頭、人物和圖片參考呈現自然運動與可信的物理細節。",
    },
    "What Wizstar Creators Say": { es: "Lo que dicen los creadores de Wizstar", "zh-CN": "Wizstar 创作者怎么说", "zh-TW": "Wizstar 創作者怎麼說" },
    "Production perspectives on planning connected scenes, sound, and revisions with an AI video agent.": {
      es: "Perspectivas de producción sobre la planificación de escenas conectadas, sonido y revisiones con un agente de vídeo con IA.",
      "zh-CN": "来自创作者的制作经验：如何用 AI 视频 Agent 规划连续场景、声音和修改。",
      "zh-TW": "來自創作者的製作經驗：如何用 AI 影片 Agent 規劃連貫場景、聲音和修改。",
    },
    "Questions and Answers": { es: "Preguntas y respuestas", "zh-CN": "常见问题", "zh-TW": "常見問題" },
    "Create Product Ads That Get Clicks—and Sales": { es: "Crea anuncios de producto que generen clics y ventas", "zh-CN": "制作带来点击和销售的产品广告", "zh-TW": "製作帶來點擊和銷售的產品廣告" },
    "Create Your Ad": { es: "Crea tu anuncio", "zh-CN": "创建你的广告", "zh-TW": "建立你的廣告" },
    "Turn your product details into scroll-stopping ad videos that capture attention and inspire action.": {
      es: "Convierte los detalles de tu producto en vídeos publicitarios que detienen el scroll, captan la atención e inspiran a actuar.",
      "zh-CN": "把产品信息变成抓住注意力、让用户愿意行动的广告视频。",
      "zh-TW": "把產品資訊變成抓住注意力、讓使用者願意行動的廣告影片。",
    },
    "We turned one product shoot into a full week of ad variations, testing new hooks and formats without booking another production day.": {
      es: "Convertimos una sesión de producto en una semana completa de variaciones publicitarias, probando nuevos ganchos y formatos sin reservar otro día de producción.",
      "zh-CN": "我们把一次产品拍摄变成整整一周的广告变体，不用再安排新的拍摄日，也能测试不同开场和格式。",
      "zh-TW": "我們把一次產品拍攝變成整整一週的廣告變體，不用再安排新的拍攝日，也能測試不同開場和格式。",
    },
    "The product stays consistent across every scene, so our paid-social team can move from concept to launch much faster.": {
      es: "El producto mantiene su coherencia en cada escena, así que nuestro equipo de publicidad social puede pasar del concepto al lanzamiento mucho más rápido.",
      "zh-CN": "产品在每个场景中都保持一致，让我们的付费社媒团队可以更快从概念推进到上线。",
      "zh-TW": "產品在每個場景中都保持一致，讓我們的付費社群團隊可以更快從概念推進到上線。",
    },
    "It is easy to create separate versions for different audiences while keeping the same offer, branding, and call to action.": {
      es: "Es fácil crear versiones separadas para distintas audiencias y mantener la misma oferta, marca y llamada a la acción.",
      "zh-CN": "可以轻松为不同受众制作不同版本，同时保持相同的优惠、品牌和行动号召。",
      "zh-TW": "可以輕鬆為不同受眾製作不同版本，同時保持相同的優惠、品牌和行動號召。",
    },
    "Our creative testing cycle is noticeably shorter. We can see which opening and product angle works before scaling spend.": {
      es: "Nuestro ciclo de pruebas creativas es mucho más corto. Podemos ver qué apertura y enfoque de producto funcionan antes de aumentar la inversión.",
      "zh-CN": "我们的创意测试周期明显缩短了。在扩大投放前，就能看出哪种开场和产品角度更有效。",
      "zh-TW": "我們的創意測試週期明顯縮短了。在擴大投放前，就能看出哪種開場和產品角度更有效。",
    },
    "From a rough brief to polished vertical ads, the workflow gives our small team the output of a much larger creative department.": {
      es: "Desde un briefing inicial hasta anuncios verticales pulidos, este flujo permite a nuestro pequeño equipo producir como un departamento creativo mucho mayor.",
      "zh-CN": "从粗略 brief 到精致竖屏广告，这套工作流让我们的小团队也能获得大型创意部门的产出。",
      "zh-TW": "從粗略 brief 到精緻直式廣告，這套工作流程讓我們的小團隊也能獲得大型創意部門的產出。",
    },
  };

  const englishPlaceholders = {
    "【页面标题占位】": "【Page title placeholder】",
    "【主标题第一行】": "【Main headline line one】",
    "【主标题第二行】": "【Main headline line two】",
    "【用一到两句话说明页面提供的核心价值，以及用户可以获得什么结果】": "【Describe the core value and result in one or two sentences】",
    "【内容描述】": "【Content description】",
    "【添加参考素材】": "【Add reference materials】",
    "【模型选择】": "【Model selection】",
    "【比例设置】": "【Aspect ratio settings】",
    "【清晰度设置】": "【Resolution settings】",
    "【模型选项一】": "【Model option one】",
    "【模型选项二】": "【Model option two】",
    "【模型选项三】": "【Model option three】",
    "【模型名称】": "【Model name】",
    "【标签】": "【Label】",
    "【模型说明文字】": "【Model description】",
    "【比例】": "【Aspect ratio】",
    "【比例一】": "【Vertical format】",
    "【比例二】": "【Horizontal format】",
    "【清晰度】": "【Resolution】",
    "【清晰度一】": "【Resolution one】",
    "【清晰度二】": "【Resolution two】",
    "【清晰度三】": "【Resolution three】",
    "【主按钮文字】": "【Primary button text】",
    "【广告电商效果展示】": "【E-commerce advertising results showcase】",
    "【跳转提示文字】": "【Navigation prompt】",
    "【广告类型1】": "【Ad type 1】",
    "【广告类型2】": "【Ad type 2】",
    "【广告类型3】": "【Ad type 3】",
    "【广告类型4】": "【Ad type 4】",
    "【模块用途提示：这里用于展示产品广告视频、创意方向、使用场景或转化效果；后续替换真实文案和视频素材】": "【Use this module to showcase product ad videos, creative directions, use cases, or conversion results; replace the copy and video assets later】",
    "【展示内容走马灯】": "【Showcase carousel】",
    "【视频素材占位】": "【Video asset placeholder】",
    "【竖屏视频素材占位】": "【Portrait video asset placeholder】",
    "【播放视频声音】": "【Play video sound】",
    "【播放声音】": "【Play sound】",
    "【功能宣传模块标题】": "【Feature promotion module title】",
    "【功能宣传模块说明：这里概括产品能够提供的核心功能、使用价值或转化结果】": "【Summarize the core features, use value, or conversion results here】",
    "【功能标题1】": "【Feature title 1】",
    "【功能标题2】": "【Feature title 2】",
    "【功能标题3】": "【Feature title 3】",
    "【功能标题4】": "【Feature title 4】",
    "【功能标题5】": "【Feature title 5】",
    "【功能标题6】": "【Feature title 6】",
    "【功能说明占位：这里描述该功能如何帮助用户完成任务、解决问题或提升广告电商效果】": "【Describe how this feature helps users complete tasks, solve problems, or improve e-commerce ad results】",
    "【功能视频素材占位】": "【Feature video asset placeholder】",
    "【播放功能视频声音】": "【Play feature video sound】",
    "【评论内容走马灯】": "【Comment carousel】",
    "【功能按钮文字】": "【Feature button text】",
  };
  Object.entries(englishPlaceholders).forEach(([source, en]) => {
    copy[source] = { ...(copy[source] || {}), en };
  });

  const faq = {
    "What product materials do I need to make an e-commerce ad video?": {
      es: "¿Qué materiales del producto necesito para crear un vídeo publicitario de e-commerce?",
      "zh-CN": "制作电商广告视频需要哪些产品素材？",
      "zh-TW": "製作電商廣告影片需要哪些產品素材？",
    },
    "Can I create both vertical and horizontal ads for the same product?": {
      es: "¿Puedo crear anuncios verticales y horizontales para el mismo producto?",
      "zh-CN": "同一个产品可以同时制作竖屏和横屏广告吗？",
      "zh-TW": "同一個產品可以同時製作直式和橫式廣告嗎？",
    },
    "Where can I use the generated video?": { es: "¿Dónde puedo usar el vídeo generado?", "zh-CN": "生成的视频可以用在哪里？", "zh-TW": "生成的影片可以用在哪裡？" },
    "Can I create multiple ad versions for the same product?": { es: "¿Puedo crear varias versiones publicitarias para el mismo producto?", "zh-CN": "同一个产品可以制作多个广告版本吗？", "zh-TW": "同一個產品可以製作多個廣告版本嗎？" },
    "Can I replace the ad copy, product images, and video materials later?": { es: "¿Puedo sustituir después el texto, las imágenes y los vídeos del anuncio?", "zh-CN": "之后可以替换广告文案、产品图片和视频素材吗？", "zh-TW": "之後可以替換廣告文案、產品圖片和影片素材嗎？" },
    "Can I use different visual directions for different product categories?": { es: "¿Puedo usar distintas direcciones visuales para diferentes categorías de producto?", "zh-CN": "不同产品类别可以使用不同的视觉方向吗？", "zh-TW": "不同產品類別可以使用不同的視覺方向嗎？" },
    "How can I keep the product and brand details consistent?": { es: "¿Cómo mantengo coherentes los detalles del producto y la marca?", "zh-CN": "如何保持产品和品牌细节一致？", "zh-TW": "如何保持產品和品牌細節一致？" },
    "Can I use ad performance data to improve the next version?": { es: "¿Puedo usar datos de rendimiento para mejorar la siguiente versión?", "zh-CN": "可以用广告表现数据改进下一个版本吗？", "zh-TW": "可以用廣告表現數據改進下一個版本嗎？" },
  };
  Object.assign(copy, faq);

  const answerCopy = {
    "You can start with a product image, video, or audio reference, together with a clear description of the product, offer, audience, or creative direction you want to communicate.": {
      es: "Puedes empezar con una imagen, vídeo o referencia de audio del producto, junto con una descripción clara del producto, la oferta, la audiencia o la dirección creativa.",
      "zh-CN": "你可以从产品图片、视频或音频参考开始，并补充清晰的产品、优惠、受众或创意方向说明。",
      "zh-TW": "你可以從產品圖片、影片或音訊參考開始，並補充清晰的產品、優惠、受眾或創意方向說明。",
    },
    "Yes. The creation controls include 9:16 and 16:9 output options, so you can prepare the same product concept for vertical and widescreen placements.": {
      es: "Sí. Los controles incluyen formatos 9:16 y 16:9 para preparar el mismo concepto de producto para ubicaciones verticales y panorámicas.",
      "zh-CN": "可以。创建控件包含 9:16 和 16:9 输出选项，可以为竖屏和宽屏投放准备同一个产品概念。",
      "zh-TW": "可以。建立控制項包含 9:16 和 16:9 輸出選項，可以為直式和寬螢幕投放準備同一個產品概念。",
    },
    "The output can be used in e-commerce listings, social content, and paid advertising placements that support the selected video format. The template does not publish campaigns directly to an ad platform.": {
      es: "El resultado puede usarse en fichas de e-commerce, contenido social y ubicaciones publicitarias compatibles con el formato elegido. La plantilla no publica campañas directamente en una plataforma publicitaria.",
      "zh-CN": "输出内容可用于电商详情页、社交内容和支持所选视频格式的付费广告位。模板不会直接把广告活动发布到广告平台。",
      "zh-TW": "輸出內容可用於電商詳情頁、社群內容和支援所選影片格式的付費廣告位。模板不會直接把廣告活動發布到廣告平台。",
    },
    "Yes. Create separate versions by changing the prompt, reference materials, model, aspect ratio, or resolution while keeping the same product brief.": {
      es: "Sí. Crea versiones separadas cambiando el prompt, las referencias, el modelo, el formato o la resolución y mantén el mismo briefing de producto.",
      "zh-CN": "可以。保持同一个产品 brief，修改提示词、参考素材、模型、比例或清晰度，就能创建不同版本。",
      "zh-TW": "可以。保持同一個產品 brief，修改提示詞、參考素材、模型、比例或清晰度，就能建立不同版本。",
    },
    "Yes. The template is designed for replaceable text, images, and videos. Its fixed layout, visual system, and interactions stay the same when you update those materials.": {
      es: "Sí. La plantilla permite sustituir textos, imágenes y vídeos. El diseño, el sistema visual y las interacciones fijas se mantienen al actualizar esos materiales.",
      "zh-CN": "可以。模板支持替换文字、图片和视频；更新这些素材时，固定布局、视觉系统和交互保持不变。",
      "zh-TW": "可以。模板支援替換文字、圖片和影片；更新這些素材時，固定版面、視覺系統和互動保持不變。",
    },
    "Yes. Describe the desired style, audience, product angle, and campaign direction in the prompt, and provide references when a specific visual direction matters.": {
      es: "Sí. Describe en el prompt el estilo, la audiencia, el enfoque del producto y la dirección de campaña, y añade referencias cuando sea necesario.",
      "zh-CN": "可以。在提示词中描述想要的风格、受众、产品角度和活动方向；需要明确视觉方向时，再提供参考素材。",
      "zh-TW": "可以。在提示詞中描述想要的風格、受眾、產品角度和活動方向；需要明確視覺方向時，再提供參考素材。",
    },
    "Use clear product references and repeat the important brand, product, and offer details in the prompt. The result can vary by generation, so review the output before publishing.": {
      es: "Usa referencias claras del producto y repite en el prompt los detalles importantes de marca, producto y oferta. El resultado puede variar, así que revísalo antes de publicarlo.",
      "zh-CN": "使用清晰的产品参考，并在提示词中重复重要的品牌、产品和优惠信息。每次生成结果可能不同，发布前请检查输出。",
      "zh-TW": "使用清晰的產品參考，並在提示詞中重複重要的品牌、產品和優惠資訊。每次生成結果可能不同，發布前請檢查輸出。",
    },
    "Yes, but the template does not connect directly to campaign analytics. You can use your external performance results to revise the prompt, references, or creative direction and then create another version.": {
      es: "Sí, pero la plantilla no se conecta directamente a las analíticas de campañas. Puedes usar resultados externos para revisar el prompt, las referencias o la dirección creativa y crear otra versión.",
      "zh-CN": "可以，但模板不会直接连接广告数据分析。你可以根据外部表现结果修改提示词、参考素材或创意方向，再创建新版本。",
      "zh-TW": "可以，但模板不會直接連接廣告數據分析。你可以根據外部表現結果修改提示詞、參考素材或創意方向，再建立新版本。",
    },
  };
  Object.assign(copy, answerCopy);

  const navCopy = {
    Products: { es: "Productos", "zh-CN": "产品", "zh-TW": "產品" },
    Enterprise: { es: "Empresa", "zh-CN": "企业", "zh-TW": "企業" },
    Resources: { es: "Recursos", "zh-CN": "资源", "zh-TW": "資源" },
    Pricing: { es: "Precios", "zh-CN": "价格", "zh-TW": "價格" },
    API: { es: "API", "zh-CN": "API", "zh-TW": "API" },
    "Talk to Sales": { es: "Habla con ventas", "zh-CN": "联系销售", "zh-TW": "聯絡銷售" },
    "Sign in": { es: "Iniciar sesión", "zh-CN": "登录", "zh-TW": "登入" },
    Product: { es: "Producto", "zh-CN": "产品", "zh-TW": "產品" },
    Solution: { es: "Soluciones", "zh-CN": "解决方案", "zh-TW": "解決方案" },
    Company: { es: "Empresa", "zh-CN": "公司", "zh-TW": "公司" },
    Resources: { es: "Recursos", "zh-CN": "资源", "zh-TW": "資源" },
  };
  Object.assign(copy, navCopy);

  const readStoredLocale = () => {
    try {
      return window.localStorage.getItem("wizstar-template-locale");
    } catch {
      return null;
    }
  };
  const saveStoredLocale = (value) => {
    try {
      window.localStorage.setItem("wizstar-template-locale", value);
    } catch {
      // file:// pages can disable storage; the current page still switches on reload.
    }
  };
  const localeFromState = () => {
    const query = new URLSearchParams(window.location.search).get("lang");
    const stored = readStoredLocale();
    return query && locales[query] ? query : stored && locales[stored] ? stored : "en";
  };

  let locale = localeFromState();
  const translateValue = (value) => copy[value]?.[locale] ?? value;
  // Keep the source and the last rendered value together. This lets the
  // template detect text that was replaced later, instead of translating only
  // the strings that existed when the page first loaded.
  const sourceText = new WeakMap();
  const sourceAttributes = new WeakMap();
  let applyingTranslation = false;
  // The template is intentionally self-contained.  Do not rely on a remote
  // translation request: local HTML files and offline previews can block it.
  // New copy should be added through `WizstarTemplateI18n.register(...)`.
  const sourceKeyFor = (element, fallback) => element?.getAttribute?.("data-i18n") || fallback;
  const sourceFor = (value) => {
    if (copy[value]) return value;
    for (const [key, translations] of Object.entries(copy)) {
      if (translations?.[locale] === value) return key;
    }
    return value;
  };
  const isLanguageControl = (node) => {
    const element = node?.nodeType === Node.ELEMENT_NODE
      ? node
      : node?.parentElement;
    return Boolean(element?.closest?.(".languageWrap"));
  };

  async function translateUnknown(source) {
    return copy[source]?.[locale] || source;
  }

  const textStateFor = (textNode, rendered) => {
    const previous = sourceText.get(textNode);
    if (!previous || (previous.rendered !== rendered && !Object.values(previous.renderedByLocale || {}).includes(rendered))) {
      const state = { source: rendered, rendered, renderedByLocale: { [locale]: rendered } };
      sourceText.set(textNode, state);
      return state;
    }
    return previous;
  };

  async function translateTextNode(textNode) {
    if (!textNode || isLanguageControl(textNode)) return;
    const rendered = textNode.nodeValue || "";
    const trimmed = rendered.trim();
    if (!trimmed) return;
    const state = textStateFor(textNode, rendered);
    const owner = textNode.parentElement;
    const original = sourceKeyFor(owner, state.source.trim());
    const translated = locale === "en"
      ? original
      : (copy[original]?.[locale] || await translateUnknown(original));
    if (!translated || sourceText.get(textNode) !== state) return;
    const current = textNode.nodeValue || "";
    if (current !== rendered) return;
    const next = locale === "en" ? original : translated;
    applyingTranslation = true;
    textNode.nodeValue = current.replace(trimmed, next);
    applyingTranslation = false;
    state.rendered = textNode.nodeValue || "";
    state.renderedByLocale[locale] = state.rendered;
  }

  async function translateUnknownNodes(root) {
    if (!root || locale === "en") return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) textNodes.push(node);
    await Promise.all(textNodes.map(translateTextNode));
    const elements = [...(root.querySelectorAll?.("[aria-label],[title],[placeholder]") || [])];
    await Promise.all(elements.map(async (element) => {
      if (isLanguageControl(element)) return;
      let originals = sourceAttributes.get(element);
      if (!originals) {
        originals = {};
        sourceAttributes.set(element, originals);
      }
      await Promise.all(["aria-label", "title", "placeholder"].map(async (attribute) => {
        const rendered = element.getAttribute(attribute);
        if (!rendered) return;
        const original = element.getAttribute("data-i18n") || originals[attribute] || sourceFor(rendered);
        originals[attribute] = original;
        const translated = locale === "en"
          ? original
          : (copy[original]?.[locale] || await translateUnknown(original));
        if (translated && element.getAttribute(attribute) === rendered) {
          element.setAttribute(attribute, translated);
        }
      }));
    }));
  }

  function translateRoot(root) {
    if (!root) return;
    root.querySelectorAll?.(".model-reveal-title").forEach((element) => {
      const source = "Top AI Models Powering Wizstar’s Ad Creation";
      const translated = translateValue(source);
      if (translated !== source) element.textContent = translated;
    });
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) nodes.push(node);
    nodes.forEach((textNode) => {
      if (isLanguageControl(textNode)) return;
      const raw = textNode.nodeValue || "";
      const trimmed = raw.trim();
      if (!trimmed) return;
      const state = textStateFor(textNode, raw);
      const original = sourceKeyFor(textNode.parentElement, state.source.trim());
      const translated = translateValue(original);
      const next = locale === "en" ? original : translated;
      if (next !== original || locale === "en") {
        textNode.nodeValue = raw.replace(trimmed, next);
        state.rendered = textNode.nodeValue || "";
        state.renderedByLocale[locale] = state.rendered;
      }
    });
    root.querySelectorAll?.("[aria-label],[title],[placeholder]").forEach((element) => {
      if (isLanguageControl(element)) return;
      let originalAttributes = sourceAttributes.get(element);
      if (!originalAttributes) {
        originalAttributes = {};
        sourceAttributes.set(element, originalAttributes);
      }
      ["aria-label", "title", "placeholder"].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        if (!value) return;
        const original = element.getAttribute("data-i18n") || originalAttributes[attribute] || sourceFor(value);
        originalAttributes[attribute] = original;
        element.setAttribute(attribute, translateValue(original));
      });
    });
    void translateUnknownNodes(root);
  }

  function applyLocale(nextLocale) {
    locale = nextLocale;
    document.documentElement.lang = locale;
    saveStoredLocale(locale);
    translateRoot(document.body);
    const navbar = document.querySelector("wizstar-navbar");
    const footer = document.querySelector("wizstar-footer");
    translateRoot(navbar?.shadowRoot);
    translateRoot(footer?.shadowRoot);
    const shadow = navbar?.shadowRoot;
    const label = shadow?.querySelector(".languageButton span");
    if (label) label.textContent = locales[locale];
    shadow?.querySelectorAll(".languageOption").forEach((option) => {
      const text = option.textContent.trim();
      const optionLocale = Object.keys(locales).find((key) => locales[key] === text) || "en";
      option.classList.toggle("languageOptionActive", optionLocale === locale);
    });
    window.dispatchEvent(new CustomEvent("wizstar:localechange", { detail: { locale } }));
  }

  function wireNavbar() {
    const navbar = document.querySelector("wizstar-navbar");
    const footer = document.querySelector("wizstar-footer");
    const shadow = navbar?.shadowRoot;
    if (!shadow) return false;
    translateRoot(document.body);
    translateRoot(shadow);
    translateRoot(footer?.shadowRoot);
    const label = shadow.querySelector(".languageButton span");
    if (label) label.textContent = locales[locale];
    if (!navbar.dataset.templateI18nClickBound) {
      navbar.dataset.templateI18nClickBound = "true";
      shadow.addEventListener("click", (event) => {
        const option = event.composedPath().find((node) => node?.classList?.contains?.("languageOption"));
        const nextLocale = option?.dataset?.templateLocale;
        if (nextLocale && locales[nextLocale]) applyLocale(nextLocale);
      }, true);
    }
    shadow.querySelectorAll(".languageOption").forEach((option) => {
      const text = option.textContent.trim();
      const optionLocale = Object.keys(locales).find((key) => locales[key] === text) || "en";
      option.dataset.templateLocale = optionLocale;
      option.classList.toggle("languageOptionActive", optionLocale === locale);
      option.onclick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        applyLocale(optionLocale);
      };
      if (option.dataset.templateI18nBound) return;
      option.dataset.templateI18nBound = "true";
      option.addEventListener("click", () => {
        applyLocale(optionLocale);
      });
    });
    return true;
  }

  function start() {
    document.documentElement.lang = locale;
    translateRoot(document.body);
    const timer = window.setInterval(() => {
      if (wireNavbar()) window.clearInterval(timer);
    }, 50);
    window.setTimeout(() => window.clearInterval(timer), 5000);
    const observer = new MutationObserver((records) => {
      if (applyingTranslation) return;
      records.forEach((record) => {
        record.addedNodes.forEach((added) => {
          if (added.nodeType === Node.ELEMENT_NODE) translateRoot(added);
          else if (added.nodeType === Node.TEXT_NODE) translateRoot(added.parentNode);
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  window.WizstarTemplateI18n = {
    locales: Object.freeze({ ...locales }),
    getLocale() {
      return locale;
    },
    setLocale: applyLocale,
    register(source, translations) {
      if (!source || !translations || typeof translations !== "object") return;
      copy[source] = { ...translations };
      applyLocale(locale);
    },
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
