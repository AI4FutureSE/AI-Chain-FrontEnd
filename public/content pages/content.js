$(document).ready(()=>{
    $('#promptmanship').attr('href', null)
    $('head').append('    <!-- Google tag (gtag.js) -->\n' +
        '    <script async src="httpss://www.googletagmanager.com/gtag/js?id=G-WDT7R908VP"></script>\n' +
        '    <script>\n' +
        '        window.dataLayer = window.dataLayer || [];\n' +
        '        function gtag(){dataLayer.push(arguments);}\n' +
        '        gtag(\'js\', new Date());\n' +
        '\n' +
        '        gtag(\'config\', \'G-WDT7R908VP\');\n' +
        '    </script>' +
        '<link rel="icon" type="image/x-icon" href="https://' + location.host + '/public/image/graphics/favicon.ico">')

    addTopNavBar()
    function addTopNavBar(){
        let topNav = $('.my-navbar')
        topNav.html('<nav class="navbar navbar-expand-lg navbar-light my-navbar">\n' +
            '    <a class="navbar-brand" href="https://' + location.host + '/public/index.html"><img class="brand-logo" src="https://' + location.host + '/public/image/graphics/logo-blue.png"></a>\n' +
            '    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">\n' +
            '        <span class="navbar-toggler-icon"></span>\n' +
            '    </button>\n' +
            '    <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">\n' +
            '        <ul class="navbar-nav">\n' +
            '            <li class="nav-item">\n' +
            '                <a class="nav-link" href="https://www.aichain.store/"><i class="bi bi-shop-window"></i>Marketplace</a>\n' +
            '            </li>\n' +
            '            <li class="nav-item">\n' +
            '                <a class="nav-link" href="https://' + location.host + '/public/content%20pages/ai20software30.html"><i class="bi bi-card-list"></i>Documentation</a>\n' +
            '            </li>\n' +
            '            <li class="nav-item">\n' +
            '                <a class="nav-link" href="https://www.promptsapper.tech/"><i class="bi bi-motherboard"></i>Sapper IDE</a>\n' +
            '            </li>\n' +
            '        </ul>\n' +
            '    </div>\n' +
            '</nav>')
    }

    addSideNavBar()
    function addSideNavBar(){
        let docNav = '<nav class="doc-nav">\n' +
            '        <ul class="doc-list">\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="ai20" href="https://' + location.host + '/public/content pages/ai20software30.html">AI 2.0 and Software 3.0</a>\n' +
            '                <!-- 2ed level -->\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="aichainexamples" href="https://' + location.host + '/public/content pages/whysignificant.html">Why is it Significant?</a>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="aichainexamples" href="https://' + location.host + '/public/content pages/aichainexamples.html">AI Chain Examples</a>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="aichainexamples" href="https://' + location.host + '/public/content pages/notflashinpan.html"> Is AI chain a Flash in the Pan?</a>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '            </li>\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="se4aichain" href="https://' + location.host + '/public/content pages/se4aichain.html">SE for AI Chain: Vision & Goals</a>\n' +
            '            </li>\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="promptmanship" href="https://' + location.host + '/public/content pages/promptmanship.html">Promptmanship</a>\n' +
            '                <!-- 2ed level -->\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="rapidpro" href="https://' + location.host + '/public/content pages/rapidprototypingprocess.html">Rapid Prototype Process</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="aichainconcepts" href="https://' + location.host + '/public/content pages/aichainconcepts.html">AI Chain Concepts</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="activities" href="https://' + location.host + '/public/content pages/activitiessummary.html">Activities</a>\n' +
            '                        <!-- 3rd level -->\n' +
            '                        <ul class="doc-list">\n' +
            '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="magic" href="https://' + location.host + '/public/content pages/magicenhancingmagic.html">Magic Enhancing Magic</a>\n' +
            '                            </li>\n' +
            '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="taskmodeling" href="https://' + location.host + '/public/content pages/taskmodeling.html">Task Modelling</a>\n' +
            '                            </li>\n' +
            '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="systemdesign" href="https://' + location.host + '/public/content pages/systemdesign.html">System Design</a>\n' +
            '                            </li>\n' +
            '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="aichainimplement" href="https://' + location.host + '/public/content pages/aichainimplementation.html">AI Chain Implementation</a>\n' +
            '                                <!-- 4th level -->\n' +
            '                                <ul class="doc-list">\n' +
            '                                    <li class="doc-item">\n' +
            '                                        <a class="doc-link doc-link-level4" id="worker" href="https://' + location.host + '/public/content pages/workerstereotypes.html">Worker Stereotype</a>\n' +
            '                                    </li>\n' +
            '                                    <li class="doc-item">\n' +
            '                                        <a class="doc-link doc-link-level4" id="promptpattern" href="https://' + location.host + '/public/content pages/promptpatterns.html">Prompting Patterns</a>\n' +
             '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="aichaintesting" href="https://' + location.host + '/public/content pages/aichaintesting.html">AI Chain Testing</a>\n' +
            '                            </li>\n' +
           '                                    </li>\n' +
            '                                </ul>\n' +
            '                            </li>\n' +
            '                        </ul>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '            </li>\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="se4aichain" href="https://' + location.host + '/public/content pages/structuredpromptLang.html">Structured Prompting Language</a>\n' +
            '            </li>\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="sapperide" href="https://' + location.host + '/public/content pages/sapperide/ideintro.html">Sapper Products</a>\n' +
            '                <!-- 2ed level -->\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="exploreview" >Sapper Community</a>\n' +
                    '                <!-- 3ed level -->\n' +
                    '                <ul class="doc-list">\n' +
                    '                    <li class="doc-item">\n' +
                    '                        <a class="doc-link doc-link-level3" id="exploreview" href="https://' + location.host + '/public/content pages/sapperide/generateSP.html">Generate Structured Prompt</a>\n' +
                    '                    </li>\n' +
                    '                    <li class="doc-item">\n' +
                    '                        <a class="doc-link doc-link-level3" id="designview" href="https://' + location.host + '/public/content pages/sapperide/refineSP.html">Refine Structured Prompt</a>\n' +
                    '                    </li>\n' +
                    '                    <li class="doc-item">\n' +
                    '                        <a class="doc-link doc-link-level3" id="blockview" href="https://' + location.host + '/public/content pages/sapperide/runSP.html">Run Structured Prompt</a>\n' +
                    '                    </li>\n' +
                    '                    <li class="doc-item">\n' +
                    '                        <a class="doc-link doc-link-level3" id="prompthub" href="https://' + location.host + '/public/content pages/sapperide/deploySP.html">Deploy Structured Prompt</a>\n' +
                    '                    </li>\n'+
                    '                </ul>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="designview" href="https://' + location.host + '/public/content pages/sapperide/ideintro.html">Sapper Pro/Enterprise</a>\n' +
                    '                <!-- 3ed level -->\n' +
                    '                <ul class="doc-list">\n' +
                    '                    <li class="doc-item">\n' +
                    '                        <a class="doc-link doc-link-level3" id="exploreview" href="https://' + location.host + '/public/content pages/sapperide/explorationview.html">Exploration View</a>\n' +
                    '                    </li>\n' +
                    '                    <li class="doc-item">\n' +
                    '                        <a class="doc-link doc-link-level3" id="designview" href="https://' + location.host + '/public/content pages/sapperide/designview.html">Design View</a>\n' +
                    '                    </li>\n' +
                    '                    <li class="doc-item">\n' +
                    '                        <a class="doc-link doc-link-level3" id="blockview" href="https://' + location.host + '/public/content pages/sapperide/blockview.html">Block View</a>\n' +
                    '                    </li>\n' +
                    '                    <li class="doc-item">\n' +
                    '                        <a class="doc-link doc-link-level3" id="prompthub" href="https://' + location.host + '/public/content pages/sapperide/prompthub.html">Prompt Hub</a>\n' +
                    '                    </li>\n' +
                    '                    <li class="doc-item">\n' +
                    '                        <a class="doc-link doc-link-level3" id="enginemanagement" href="https://' + location.host + '/public/content pages/sapperide/enginemanagement.html">Engine Management</a>\n' +
                    '                    </li>\n' +
                    '                    <li class="doc-item">\n' +
                    '                        <a class="doc-link doc-link-level3" id="projectmanagement" href="https://' + location.host + '/public/content pages/sapperide/projectmanagement.html">Project Management</a>\n' +
                    '                    </li>\n' +
                    '                </ul>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '            </li>\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="showcase" href="https://' + location.host + '/public/content pages/showcases/showcases.html">AI Chain Showcases</a>\n' +
            '                <!-- 2ed level -->\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="wenxiaojie" href="https://' + location.host + '/public/content pages/showcases/wenxiaojie/wenxiaojie.html">文小杰 (Wen Xiao Jie)</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="qingxiaoxie" href="https://' + location.host + '/public/content pages/showcases/qingxiaoxie/qingxiaoxie.html">轻小写 (Qing Xiao Xie)</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="chunxiaoxie" href="https://' + location.host + '/public/content pages/showcases/chunxiaoxie/chunxiaoxie.html">纯小写 (Chun Xiao Xie)</a>\n' +
            '                    </li>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="sixiaopin" href="https://' + location.host + '/public/content pages/showcases/sixiaopin/sixiaopin.html">思小聘 (Si Xiao Pin)</a>\n' +
            '                    </li>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="xinxiaozhu" href="https://' + location.host + '/public/content pages/showcases/xinxiaozhu/xinxiaozhu.html">心小助 (Xin Xiao Zhu)</a>\n' +
            '                    </li>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="huixiaoshi" href="https://' + location.host + '/public/content pages/showcases/huixiaoshi/huixiaoshi.html">绘小诗 (Hui Xiao Shi)</a>\n' +
            '                    </li>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="yunxiaojuan" href="https://' + location.host + '/public/content pages/showcases/yunxiaojuan/yunxiaojuan.html">云小卷 (Yun Xiao Juan)</a>\n' +
            '                    </li>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="maxiaoyuan" href="https://' + location.host + '/public/content pages/showcases/maxiaoyuan/maxiaoyuan.html">码小猿 (Ma Xiao Yuan)</a>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '            </li>\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="sappervsothers" href="https://' + location.host + '/public/content pages/sappervsothers.html">What Set Prompt Sapper Apart from Others?</a>\n' +
            '                <!-- 2ed level -->\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="aichainexamples" href="https://' + location.host + '/public/content pages/sappervschatgpt.html">Sapper vs. ChatGPT</a>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="aichainexamples" href="https://' + location.host + '/public/content pages/sappervsautoagent.html">Sapper vs. AutoGPT</a>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="aichainexamples" href="https://' + location.host + '/public/content pages/sappervsagentprogramming.html">Sapper vs. LangChain</a>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="aichainexamples" href="https://' + location.host + '/public/content pages/sappervsnocodeai.html">Sapper vs. No Code AI</a>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="aichainexamples" href="https://' + location.host + '/public/content pages/sappervspromptengineering.html">Sapper vs. Prompt Engineering</a>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '            </li>\n' +
            '        </ul>\n' +
            '    </nav>'

        $('main').prepend(docNav)
        highlightCurrentLink()
    }

    function highlightCurrentLink(){
        let pageNavID = $('#page-nav-id').text()
        $('.doc-link-active').removeClass('doc-link-active')
        $('#' + pageNavID).addClass('doc-link-active')
    }

    $('#main-content').scroll(function (){
        if ($('#main-content').scrollTop() > 800){
            $('.btn-wrap-fixed').slideDown()
        }
        else {
            $('.btn-wrap-fixed').slideUp()
        }
    })
})
