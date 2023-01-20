<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount (() => {
        if (window.netlifyIdentity) {
            window.netlifyIdentity.on('init', user => {
                if (!user) {
                    window.netlifyIdentity.on('login', () => {
                        document.location.href = '/admin/';
                    });
                    window.netlifyIdentity.on('signup', () => {
                        document.location.href = '/admin/';
                    });
                }
            });
        }
    });
</script>
<svelte:head>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

</svelte:head>
<body>
        <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
</body>