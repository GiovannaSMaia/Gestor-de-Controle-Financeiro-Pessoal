// MOCK DATA matching image items
        let monthlyTarget = 3000.00;
        let transactions = [
            { id: '1', description: 'Supermercado', amount: 142.50, type: 'despesa', category: 'Supermercado', timeText: 'Hoje, 14:20' },
            { id: '2', description: 'Cafeteria', amount: 12.00, type: 'despesa', category: 'Alimentação', timeText: 'Hoje, 09:15' },
            { id: '3', description: 'Lanchonete', amount: 35.90, type: 'despesa', category: 'Alimentação', timeText: 'Ontem' },
            { id: '4', description: 'Salário Mensal', amount: 3000.00, type: 'receita', category: 'Salário', timeText: '01 de Set' }
        ];

        let goals = [
            { id: 'g1', title: 'Reserva de Emergência', target: 5000, current: 3100 },
            { id: 'g2', title: 'Viagem de Fim de Ano', target: 2000, current: 850 }
        ];

        let activeFilter = 'todos';
        let cashChart = null;
        let categoryChart = null;

        window.onload = function() {
            renderAll();
            if (typeof Chart !== 'undefined') {
                initCharts();
                updateCharts();
            }
            document.querySelectorAll('label').forEach(label => {
                const input = label.parentElement.querySelector('input, select');
                if (input) label.htmlFor = input.id;
            });
            document.getElementById('theme-toggle').setAttribute('aria-label', 'Alternar tema');
            document.addEventListener('keydown', event => {
                if (event.key === 'Escape') {
                    closeModal();
                    closeGoalModal();
                }
            });
        };

        function escapeHTML(value) {
            const element = document.createElement('span');
            element.textContent = value;
            return element.innerHTML;
        }

        function formatBRL(val) {
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
        }

        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            document.getElementById(`tab-${tabId}`).classList.remove('hidden');

            // Desktop Nav highlight
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.className = "nav-btn px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-brand-500 hover:bg-brand-100/50 dark:hover:bg-gray-800 transition-all flex items-center gap-2";
            });
            const activeBtn = document.getElementById(`nav-${tabId}`);
            if (activeBtn) {
                activeBtn.className = "nav-btn px-4 py-2 rounded-xl text-sm font-bold text-brand-500 bg-brand-100 dark:bg-brand-500/20 transition-all flex items-center gap-2";
            }

            // Mobile Nav highlight
            ['inicio', 'extratos', 'metas', 'ajustes'].forEach(m => {
                const mobEl = document.getElementById(`mob-${m}`);
                if (mobEl) {
                    if (m === tabId) {
                        mobEl.className = "flex flex-col items-center justify-center w-16 py-1 text-brand-500 font-extrabold";
                    } else {
                        mobEl.className = "flex flex-col items-center justify-center w-16 py-1 text-gray-400 font-medium hover:text-brand-500";
                    }
                }
            });

            if (tabId === 'relatorio') {
                updateCharts();
            }
        }

        function renderAll() {
            calculateHeroMetrics();
            renderRecentExpenses();
            renderExtratos();
            renderGoals();
            updateCharts();
        }

        function calculateHeroMetrics() {
            document.getElementById('monthly-target-label').textContent = `Meta mensal: ${formatBRL(monthlyTarget)}`;
            const totalIncome = transactions.filter(t => t.type === 'receita').reduce((a, b) => a + b.amount, 0);
            const totalExpenses = transactions.filter(t => t.type === 'despesa').reduce((a, b) => a + b.amount, 0);
            const remaining = totalIncome - totalExpenses;

            document.getElementById('hero-balance').textContent = formatBRL(remaining);

            const pct = Math.min(100, Math.round((totalExpenses / monthlyTarget) * 100));
            document.getElementById('hero-percentage').textContent = `${pct}%`;
            document.getElementById('hero-progress-bar').style.width = `${pct}%`;
        }

        // RENDER EXACT CARDS MATCHING DESIGN IMAGE
        function renderRecentExpenses() {
            const container = document.getElementById('recent-expense-cards');
            container.innerHTML = '';

            const expenses = transactions.filter(t => t.type === 'despesa').slice(0, 4);

            expenses.forEach(item => {
                const card = `
                    <div class="bg-white dark:bg-darkCard p-4 rounded-3xl border border-brand-300/80 dark:border-darkBorder shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                        <div class="flex items-center space-x-3.5">
                            <div class="w-11 h-11 rounded-2xl bg-brand-100 dark:bg-brand-500/10 flex items-center justify-center text-brand-500 dark:text-brand-400 text-lg">
                                🍽️
                            </div>
                            <div>
                                <h4 class="font-extrabold text-sm text-brand-900 dark:text-white tracking-tight">${escapeHTML(item.description)}</h4>
                                <p class="text-xs font-semibold text-gray-400 mt-0.5">${item.timeText}</p>
                            </div>
                        </div>
                        <span class="font-extrabold text-sm text-rose-500 dark:text-rose-400 tracking-tight">
                            - ${formatBRL(item.amount)}
                        </span>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', card);
            });
        }

        function renderExtratos() {
            const container = document.getElementById('full-extratos-list');
            if (!container) return;
            container.innerHTML = '';

            const searchVal = document.getElementById('search-input')?.value.toLowerCase() || '';

            const filtered = transactions.filter(t => {
                const matchType = activeFilter === 'todos' || t.type === activeFilter;
                const matchSearch = t.description.toLowerCase().includes(searchVal);
                return matchType && matchSearch;
            });

            if (!filtered.length) container.textContent = 'Nenhum lançamento encontrado para este filtro.';
            filtered.forEach(item => {
                const isExpense = item.type === 'despesa';
                const card = `
                    <div class="bg-white dark:bg-darkCard p-4 rounded-3xl border border-brand-300 dark:border-darkBorder shadow-sm flex items-center justify-between">
                        <div class="flex items-center space-x-3.5">
                            <div class="w-11 h-11 rounded-2xl ${isExpense ? 'bg-brand-100 text-brand-500 dark:bg-brand-500/10' : 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10'} flex items-center justify-center text-lg">
                                <i class="fa-solid ${isExpense ? 'fa-arrow-up-right' : 'fa-arrow-down-left'}"></i>
                            </div>
                            <div>
                                <h4 class="font-extrabold text-sm text-brand-900 dark:text-white">${escapeHTML(item.description)}</h4>
                                <p class="text-xs font-semibold text-gray-400 mt-0.5">${item.category} • ${item.timeText}</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <span class="font-extrabold text-sm ${isExpense ? 'text-rose-500' : 'text-emerald-600'}">
                                ${isExpense ? '-' : '+'} ${formatBRL(item.amount)}
                            </span>
                            <button aria-label="Excluir lançamento" onclick="deleteTransaction('${item.id}')" class="text-gray-300 hover:text-rose-500 text-xs p-1">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', card);
            });
        }

        function renderGoals() {
            const container = document.getElementById('goals-grid');
            if (!container) return;
            container.innerHTML = '';

            goals.forEach(g => {
                const pct = Math.min(100, Math.round((g.current / g.target) * 100));
                const card = `
                    <div class="bg-white dark:bg-darkCard p-5 rounded-3xl border border-brand-300 dark:border-darkBorder shadow-sm space-y-3">
                        <div class="flex justify-between items-center">
                            <h4 class="font-extrabold text-sm text-brand-900 dark:text-white">${escapeHTML(g.title)}</h4>
                            <span class="text-xs font-bold text-brand-500 bg-brand-100 dark:bg-brand-500/20 px-2.5 py-1 rounded-xl">${pct}%</span>
                        </div>
                        <div class="flex justify-between text-xs text-gray-400 font-semibold">
                            <span>Guardado: ${formatBRL(g.current)}</span>
                            <span>Alvo: ${formatBRL(g.target)}</span>
                        </div>
                        <div class="w-full bg-brand-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                            <div class="bg-brand-500 h-full rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', card);
            });
        }

        function setFilter(type) {
            activeFilter = type;
            ['todos', 'despesa', 'receita'].forEach(f => {
                const btn = document.getElementById(`filter-${f}`);
                if (f === type) {
                    btn.className = "px-3.5 py-1.5 rounded-xl text-xs font-bold bg-brand-500 text-white transition-all";
                } else {
                    btn.className = "px-3.5 py-1.5 rounded-xl text-xs font-bold bg-brand-100 dark:bg-gray-800 text-brand-900 dark:text-gray-300 hover:bg-brand-200 transition-all";
                }
            });
            renderExtratos();
        }

        // MODAL CONTROLS
        function openModal(type = 'despesa') {
            setModalType(type);
            document.getElementById('transaction-modal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('transaction-modal').classList.add('hidden');
            document.getElementById('transaction-form').reset();
        }

        function setModalType(type) {
            document.getElementById('modal-title').textContent = type === 'receita' ? 'Nova Receita' : 'Novo Gasto';
            document.getElementById('tx-type').value = type;
            const btnD = document.getElementById('btn-modal-despesa');
            const btnR = document.getElementById('btn-modal-receita');
            if (type === 'despesa') {
                btnD.className = "py-2 text-xs font-extrabold rounded-xl bg-brand-500 text-white shadow-sm";
                btnR.className = "py-2 text-xs font-extrabold rounded-xl text-brand-900 dark:text-gray-300";
            } else {
                btnR.className = "py-2 text-xs font-extrabold rounded-xl bg-brand-500 text-white shadow-sm";
                btnD.className = "py-2 text-xs font-extrabold rounded-xl text-brand-900 dark:text-gray-300";
            }
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            const desc = document.getElementById('tx-desc').value;
            const amt = parseFloat(document.getElementById('tx-amount').value);
            const cat = document.getElementById('tx-category').value;
            const type = document.getElementById('tx-type').value;

            transactions.unshift({
                id: Date.now().toString(),
                description: desc,
                amount: amt,
                type: type,
                category: cat,
                timeText: 'Hoje, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });

            renderAll();
            closeModal();
        }

        function deleteTransaction(id) {
            transactions = transactions.filter(t => t.id !== id);
            renderAll();
        }

        function openGoalModal() {
            document.getElementById('goal-modal').classList.remove('hidden');
        }

        function closeGoalModal() {
            document.getElementById('goal-modal').classList.add('hidden');
            document.getElementById('goal-form').reset();
        }

        function handleGoalSubmit(e) {
            e.preventDefault();
            const title = document.getElementById('goal-title').value;
            const target = parseFloat(document.getElementById('goal-target').value);
            const current = parseFloat(document.getElementById('goal-current').value);

            goals.push({
                id: 'g' + Date.now(),
                title: title,
                target: target,
                current: current
            });

            renderGoals();
            closeGoalModal();
        }

        function changeMonthlyTarget() {
            const val = prompt("Digite a nova meta mensal (R$):", monthlyTarget);
            const amount = Number(val?.replace(',', '.'));
            if (val && Number.isFinite(amount) && amount > 0) {
                monthlyTarget = amount;
                renderAll();
            }
        }

        function toggleDarkMode() {
            const html = document.documentElement;
            const icon = document.getElementById('theme-icon');
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                icon.className = 'fa-solid fa-moon text-base';
            } else {
                html.classList.add('dark');
                icon.className = 'fa-solid fa-sun text-base text-amber-400';
            }
        }

        // CHARTS INIT & UPDATE
        function initCharts() {
            const ctx1 = document.getElementById('cashFlowChart').getContext('2d');
            cashChart = new Chart(ctx1, {
                type: 'line',
                data: {
                    labels: ['Jun', 'Jul', 'Ago', 'Set'],
                    datasets: [{
                        label: 'Despesas',
                        data: [1200, 1500, 1100, 1850],
                        borderColor: '#7F22FE',
                        backgroundColor: 'rgba(127, 34, 254, 0.1)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { grid: { display: false } },
                        y: { grid: { color: 'rgba(226, 217, 255, 0.4)' } }
                    }
                }
            });

            const ctx2 = document.getElementById('categoryDoughnutChart').getContext('2d');
            categoryChart = new Chart(ctx2, {
                type: 'doughnut',
                data: {
                    labels: ['Supermercado', 'Alimentação', 'Outros'],
                    datasets: [{
                        data: [142.50, 47.90, 0],
                        backgroundColor: ['#7F22FE', '#A266FF', '#E2D9FF'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '70%',
                    plugins: { legend: { position: 'bottom' } }
                }
            });
        }

        function updateCharts() {
            if (!categoryChart) return;
            const expenses = transactions.filter(t => t.type === 'despesa');
            const catMap = {};
            expenses.forEach(e => {
                catMap[e.category] = (catMap[e.category] || 0) + e.amount;
            });

            categoryChart.data.labels = Object.keys(catMap);
            categoryChart.data.datasets[0].data = Object.values(catMap);
            categoryChart.update();
        }
